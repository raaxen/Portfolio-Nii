export type ImageItem = {
    name: string;
    src: string;
};

function createImageList(
    images: Record<string, string>,
    namePrefix: string,
): ImageItem[] {
    return Object.entries(images)
        .sort(([left], [right]) =>
            left.localeCompare(right, undefined, { numeric: true }),
        )
        .map(([, src], index) => ({
            name: `${namePrefix}_${index + 1}`,
            src,
        }));
}

export const Portfolio = createImageList(
    import.meta.glob<string>('../assets/images/Portfolio/*.*', {
        eager: true,
        query: '?url',
        import: 'default',
    }),
    'portfolio',
);

export const resized = createImageList(
    import.meta.glob<string>(
        '../assets/images/Portfolio/iloveimg-resized/*.*',
        {
            eager: true,
            query: '?url',
            import: 'default',
        },
    ),
    'resized',
);

export const Exterior = createImageList(
    import.meta.glob<string>(
        '../assets/images/Portfolio/Exterior/*.*',
        {
            eager: true,
            query: '?url',
            import: 'default',
        },
    ),
    'exterior',
);

export const Velora = createImageList(
    import.meta.glob<string>('../assets/images/Portfolio/Velora/*.*', {
        eager: true,
        query: '?url',
        import: 'default',
    }),
    'velora',
);

export const Images = [...Portfolio, ...resized, ...Velora];
