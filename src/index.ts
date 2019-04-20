import path from 'path';

import { Platform } from './resources';
import { runPlatform, RunPlatformOptions } from './platform';


async function CordovaRes({
    directory = process.cwd(),
    resourcesDirectory = 'resources',
    logstream = process.stdout,
    errstream = process.stderr,
    platforms = {
        android: {
            icon: { sources: ['resources/icon.png'] },
            splash: { sources: ['resources/splash.png'] },
        },
        ios: {
            icon: { sources: ['resources/icon.png'] },
            splash: { sources: ['resources/splash.png'] },
        },
    },
}: CordovaRes.Options = {}) {
    const images = [];

    const resourcesPath = path.isAbsolute(resourcesDirectory)
        ? resourcesDirectory : path.resolve(directory, resourcesDirectory);

    for (const plt of [Platform.ANDROID, Platform.IOS]) {
        if (platforms[plt]) {
            const pltImages = await runPlatform(plt, resourcesPath, platforms[plt], errstream);
            logstream.write(`Generated ${pltImages.length} images for ${plt}\n`);
            images.push(...pltImages);
        }
    }

    return images;
}

namespace CordovaRes {

    export const run = CordovaRes;

    export type PlatformOptions = {
        [P in Platform]: RunPlatformOptions;
    };

    export interface Options {
        /**
         * Operating directory. Usually the root of the project.
         *
         * `cordova-res` operates in the root of a standard Cordova project setup.
         */
        readonly directory?: string;

        /**
         * Directory name or absolute path to resources directory.
         *
         * The resources directory contains the source images and generated images
         * of a Cordova project's resources.
         */
        readonly resourcesDirectory?: string;

        /**
         * Specify an alternative output mechanism.
         *
         * A NullStream may be used to silence output entirely.
         */
        readonly logstream?: NodeJS.WritableStream;

        /**
         * Specify an alternative error output mechanism.
         *
         * A NullStream may be used to silence error output entirely.
         */
        readonly errstream?: NodeJS.WritableStream;

        /**
         * Resource generation configuration by platform.
         *
         * Each key/value represents the options for a supported platform. If
         * provided, resources are generated in an explicit, opt-in manner.
         */
        readonly platforms?: PlatformOptions;
    }

}

export = CordovaRes;
