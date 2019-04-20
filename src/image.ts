import util from 'util';
import Debug from 'debug';
import sharp, { Sharp } from 'sharp';
import { readFile, writeFile } from '@ionic/utils-fs';

const debug = Debug('cordova-res:image');


export interface ImageSchema {
    width: number;
    height: number;
}

export async function resolveSourceImage(sources: string[], errstream?: NodeJS.WritableStream): Promise<[string, Sharp]> {
    const errors: [string, Error][] = [];

    for (const source of sources) {
        try {
            const image = sharp(await readFile(source));
            return [source, image];
        } catch (e) {
            errors.push([source, e]);
        }
    }

    if (errstream) {
        for (const [source, error] of errors) {
            const message = util.format('WARN: Error with source file %s: %s', source, error);
            errstream.write(`${message}\n`);
        }
    }

    throw new Error(
        `Could not find suitable source image. Looked at: ${sources.join(', ')}`
    );
}

export async function generateImage(image: ImageSchema, src: Sharp, dest: string): Promise<void> {
    debug('Generating %o (%ox%o)', dest, image.width, image.height);

    const pipeline = transformImage(image, src);
    await writeFile(dest, await pipeline.toBuffer());
}

export function transformImage(image: ImageSchema, src: Sharp): Sharp {
    return src.resize(image.width, image.height);
}
