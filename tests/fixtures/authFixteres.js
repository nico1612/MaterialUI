
export const initialState={
    status: 'checking',//'checking', 'not-authenticated' , 'authenticated'
    uid:null,
    email:null,
    displayName:null,
    photoURl:null,
    errorMessage:null
}

export const authenticatedState={
    status: 'authenticated',//'checking', 'not-authenticated' , 'authenticated'
    uid:'123ABC',
    email:'demon@google.com',
    displayName:'Demo user',
    photoURl:'https://demo.js',
    errorMessage:null
}

export const notAuthenticatedState={
    status: 'not-authenticated',//'checking', 'not-authenticated' , 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURl: null,
    errorMessage:null
}

export const demoUser={
    uid: 'ABC123',
    email: 'demo@google.com',
    displayName: 'Demo User',
    photoURL: 'https://foto.jpg'

}