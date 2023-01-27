type Base = {
    _createdAt: string
    _id: string
    _rev: string
    _type: string
    _updatedAt: string
}

interface Image {
    _type: 'image'
    asset: {
        _ref: string
        _type: 'reference'
    }
}

interface JulieInfo extends Base {
    _type: 'julieInfo'
    title: string
    image: Image
    body: string
}

interface JuliePics extends Base {
    _type: 'juliePics'
    title: string
    image: Image
    alt: string
}

interface formInput {
    name: string
    value: string
}