
export const fileUpload=async(file)=>{

    if(!file) throw new Error('no tenemos ningun archivo a subir')

    const cloudURl='https://api.cloudinary.com/v1_1/drtnp5l5g/upload'

    const formData=new FormData()
    formData.append('upload_preset','react-journal')
    FormData.append('file',file)

    try{
        
        const resp =await fetch(cloudURl,{
            method:'POST',
            body:formData
        })

        if(!resp.ok) throw new Error('No se pudo subbir la imagen')

        const cloudResp=await resp.json()

        return cloudResp.secure_url
    }
    catch(error){
        console.log(error)
        throw new Error(error.message)
    }

}