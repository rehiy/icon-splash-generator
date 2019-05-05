export const enum Platform {
    ANDROID = 'android',
    IOS = 'ios',
}

export const enum ResourceType {
    ICON = 'icon',
    SPLASH = 'splash',
}

export const enum Orientation {
    LANDSCAPE = 'landscape',
    PORTRAIT = 'portrait',
}

export const enum Density {
    LDPI = 'ldpi',
    MDPI = 'mdpi',
    HDPI = 'hdpi',
    XHDPI = 'xhdpi',
    XXHDPI = 'xxhdpi',
    XXXHDPI = 'xxxhdpi',
    LAND_LDPI = 'land-ldpi',
    LAND_MDPI = 'land-mdpi',
    LAND_HDPI = 'land-hdpi',
    LAND_XHDPI = 'land-xhdpi',
    LAND_XXHDPI = 'land-xxhdpi',
    LAND_XXXHDPI = 'land-xxxhdpi',
    PORT_LDPI = 'port-ldpi',
    PORT_MDPI = 'port-mdpi',
    PORT_HDPI = 'port-hdpi',
    PORT_XHDPI = 'port-xhdpi',
    PORT_XXHDPI = 'port-xxhdpi',
    PORT_XXXHDPI = 'port-xxxhdpi',
}

export interface ResourcesImageConfig {
    readonly name: string;
    readonly width: number;
    readonly height: number;
    readonly density?: Density;
    readonly orientation?: Orientation;
}

export type ResourcesConfigTyping = {
    [P in Platform]: {
        [R in ResourceType]: ResourcesImageConfig[]
    }
};

export const ResourcesConfig: ResourcesConfigTyping = {
    [Platform.ANDROID]: {
        [ResourceType.ICON]: [
            { name: 'drawable-ldpi-icon.png', width: 36, height: 36, density: Density.LDPI },
            { name: 'drawable-mdpi-icon.png', width: 48, height: 48, density: Density.MDPI },
            { name: 'drawable-hdpi-icon.png', width: 72, height: 72, density: Density.HDPI },
            { name: 'drawable-xhdpi-icon.png', width: 96, height: 96, density: Density.XHDPI },
            { name: 'drawable-xxhdpi-icon.png', width: 144, height: 144, density: Density.XXHDPI },
            { name: 'drawable-xxxhdpi-icon.png', width: 192, height: 192, density: Density.XXXHDPI },
        ],
        [ResourceType.SPLASH]: [
            { name: 'drawable-land-ldpi-screen.png', width: 320, height: 240, density: Density.LAND_LDPI, orientation: Orientation.LANDSCAPE },
            { name: 'drawable-land-mdpi-screen.png', width: 480, height: 320, density: Density.LAND_MDPI, orientation: Orientation.LANDSCAPE },
            { name: 'drawable-land-hdpi-screen.png', width: 800, height: 480, density: Density.LAND_HDPI, orientation: Orientation.LANDSCAPE },
            { name: 'drawable-land-xhdpi-screen.png', width: 1280, height: 720, density: Density.LAND_XHDPI, orientation: Orientation.LANDSCAPE },
            { name: 'drawable-land-xxhdpi-screen.png', width: 1600, height: 960, density: Density.LAND_XXHDPI, orientation: Orientation.LANDSCAPE },
            { name: 'drawable-land-xxxhdpi-screen.png', width: 1920, height: 1280, density: Density.LAND_XXXHDPI, orientation: Orientation.LANDSCAPE },
            { name: 'drawable-port-ldpi-screen.png', width: 240, height: 320, density: Density.PORT_LDPI, orientation: Orientation.PORTRAIT },
            { name: 'drawable-port-mdpi-screen.png', width: 320, height: 480, density: Density.PORT_MDPI, orientation: Orientation.PORTRAIT },
            { name: 'drawable-port-hdpi-screen.png', width: 480, height: 800, density: Density.PORT_HDPI, orientation: Orientation.PORTRAIT },
            { name: 'drawable-port-xhdpi-screen.png', width: 720, height: 1280, density: Density.PORT_XHDPI, orientation: Orientation.PORTRAIT },
            { name: 'drawable-port-xxhdpi-screen.png', width: 960, height: 1600, density: Density.PORT_XXHDPI, orientation: Orientation.PORTRAIT },
            { name: 'drawable-port-xxxhdpi-screen.png', width: 1280, height: 1920, density: Density.PORT_XXXHDPI, orientation: Orientation.PORTRAIT },
        ],
    },
    [Platform.IOS]: {
        [ResourceType.ICON]: [
            // App Store Icon
            { name: 'Icon-1024.png', width: 1024, height: 1024 },
            // iOS 8.0+
            // iPhone 6 Plus
            { name: 'Icon-60@3x.png', width: 180, height: 180 },
            // iOS 7.0+
            // iPhone / iPod Touch
            { name: 'Icon-60.png', width: 60, height: 60 },
            { name: 'Icon-60@2x.png', width: 120, height: 120 },
            // iPad
            { name: 'Icon-76.png', width: 76, height: 76 },
            { name: 'Icon-76@2x.png', width: 152, height: 152 },
            // Spotlight Icon
            { name: 'Icon-40.png', width: 40, height: 40 },
            { name: 'Icon-40@2x.png', width: 80, height: 80 },
            { name: 'Icon-40@3x.png', width: 120, height: 120 },
            // iOS 6.1
            // iPhone / iPod Touch
            { name: 'icon.png', width: 57, height: 57 },
            { name: 'icon@2x.png', width: 114, height: 114 },
            // iPad
            { name: 'Icon-72.png', width: 72, height: 72 },
            { name: 'Icon-72@2x.png', width: 144, height: 144 },
            // iPad Pro
            { name: 'Icon-167.png', width: 167, height: 167 },
            // iPhone Spotlight and Settings Icon
            { name: 'Icon-small.png', width: 29, height: 29 },
            { name: 'Icon-small@2x.png', width: 58, height: 58 },
            { name: 'Icon-small@3x.png', width: 87, height: 87 },
            // iPad Spotlight and Settings Icon
            { name: 'Icon-50.png', width: 50, height: 50 },
            { name: 'Icon-50@2x.png', width: 100, height: 100 },
            // iPad Pro
            { name: 'Icon-83.5@2x.png', width: 167, height: 167 },
            // we also need 20x20 for iPad Notification 20pt@1
            { name: 'Icon-20.png', width: 20, height: 20 },
            // Apple-Watch
            { name: 'Icon-24@2x.png', width: 48, height: 48 },
            { name: 'Icon-27.5@2x.png', width: 55, height: 55 },
            { name: 'Icon-44@2x.png', width: 88, height: 88 },
            { name: 'Icon-86@2x.png', width: 172, height: 172 },
            { name: 'Icon-98@2x.png', width: 196, height: 196 }
        ],
        [ResourceType.SPLASH]: [
            { name: 'Default-568h@2x~iphone.png', width: 640, height: 1136, orientation: Orientation.PORTRAIT },
            { name: 'Default-667h.png', width: 750, height: 1334, orientation: Orientation.PORTRAIT },
            { name: 'Default-736h.png', width: 1242, height: 2208, orientation: Orientation.PORTRAIT },
            { name: 'Default-Landscape-736h.png', width: 2208, height: 1242, orientation: Orientation.LANDSCAPE },
            { name: 'Default-Landscape@2x~ipad.png', width: 2048, height: 1536, orientation: Orientation.LANDSCAPE },
            { name: 'Default-Landscape@~ipadpro.png', width: 2732, height: 2048, orientation: Orientation.LANDSCAPE },
            { name: 'Default-Landscape~ipad.png', width: 1024, height: 768, orientation: Orientation.LANDSCAPE },
            { name: 'Default-Portrait@2x~ipad.png', width: 1536, height: 2048, orientation: Orientation.PORTRAIT },
            { name: 'Default-Portrait@~ipadpro.png', width: 2048, height: 2732, orientation: Orientation.PORTRAIT },
            { name: 'Default-Portrait~ipad.png', width: 768, height: 1024, orientation: Orientation.PORTRAIT },
            { name: 'Default@2x~iphone.png', width: 640, height: 960, orientation: Orientation.PORTRAIT },
            { name: 'Default~iphone.png', width: 320, height: 480, orientation: Orientation.PORTRAIT },
            { name: 'Default@2x~universal~anyany.png', width: 2732, height: 2732 },
            { name: 'Default@2x~universal~comany.png', width: 1278, height: 2732 },
            { name: 'Default@2x~universal~comcom.png', width: 1334, height: 750 },
            { name: 'Default@3x~universal~anyany.png', width: 2208, height: 2208 },
            { name: 'Default@3x~universal~anycom.png', width: 2208, height: 1242 },
            { name: 'Default@3x~universal~comany.png', width: 1242, height: 2208 }
        ],
    },
};
