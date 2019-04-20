import pathlib from 'path';
import Debug from 'debug';
import { ensureDir } from '@ionic/utils-fs';

const debug = Debug('cordova-res:platform');

import { generateImage, resolveSourceImage } from './image';
import { Platform, ResourceType, ResourcesConfig, ResourcesImageConfig } from './resources';


export interface RunPlatformTypeOptions {
    sources: string[];
}

export type RunPlatformOptions = {
    [P in ResourceType]: RunPlatformTypeOptions;
};

export interface GeneratedImage extends ResourcesImageConfig {
    src: string;
    dest: string;
    platform: Platform;
}

export async function runPlatform(platform: Platform, resourcesPath: string, options: RunPlatformOptions, errstream?: NodeJS.WritableStream) {
    debug('Running %s platform with options: %O', platform, options);

    const images: GeneratedImage[] = [];
    const types = [ResourceType.ICON, ResourceType.SPLASH];

    return images.concat(...await Promise.all(types.map(
        type => options[type] ? runPlatformType(platform, type, resourcesPath, options[type], errstream) : []
    )));
}

export async function runPlatformType(platform: Platform, type: ResourceType, resourcesPath: string, options: RunPlatformTypeOptions, errstream?: NodeJS.WritableStream): Promise<GeneratedImage[]> {
    debug('Building %s resources for %s platform', type, platform);

    const [src, pipeline] = await resolveSourceImage(options.sources, errstream);

    debug('Using %O for %s source image for %s', src, type, platform);

    const config = ResourcesConfig[platform][type];
    const dir = pathlib.resolve(resourcesPath, platform, type);
    await ensureDir(dir);

    return await Promise.all(config.map(
        async image => {
            const dest = pathlib.join(dir, image.name);
            await generateImage(image, pipeline.clone(), dest);

            return { src, dest, platform, ...image };
        }
    ));
}
