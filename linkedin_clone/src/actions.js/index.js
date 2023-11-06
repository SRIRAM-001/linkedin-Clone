import { auth,provider } from "../firebase";
import {onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth';
//import {useDispatch} from "react-redux";
import { SET_USER } from "../Reducer/userSlice";
import { upload } from "../Reducer/dataSlice";
import { storage ,db } from "../firebase";
import {set} from 'firebase/database'
import { ref,uploadBytes ,updateMetadata,getMetadata,getDownloadURL,listAll} from "firebase/storage";
//import { ,uploadBytes} from "firebase/storage";





export function signinAPI()
{

    return (dispatch) =>
    {
        
        signInWithPopup(auth,provider).then((payload)=>{
            //console.log("payload",payload.user)
            dispatch(SET_USER(payload.user))
            
        })
        .catch((error)=>alert(error.message,"kki"));
    }

}

export function signOutAPI()
{
    return (dispatch) =>
    {
        auth.signOut().then(()=>
        {
            dispatch(SET_USER(null))
        })
        .catch((error)=>alert(error.message,"kki"))
    }
}

export function getAuthApp()
{
    return (dispatch)=>
    {
        auth.onAuthStateChanged(async(user)=>{
            //console.log("user",user)
            dispatch(SET_USER(user))
        });
    }
}

export function postImageAPI(payload)
{
    return(dispatch)=>
    
    {
        console.log('pressed',payload.image.name)
        let imageRef = null;
        if(payload.image!=null)
        
        {
            const maxTimestamp = 9999999999999; // Maximum possible timestamp value
            const currentTimestamp = new Date().getTime();
            const timestamp = maxTimestamp - currentTimestamp;
            
             imageRef = ref(storage,`${payload.user.email}/images/${timestamp}${payload.image.name}`)
             
            const metadata ={
                customMetadata:{
                description:payload.description,
                email:payload.user.email,
                title:payload.user.displayName,
                image:payload.user.photoURL,
                timestamp: timestamp.toString(),
                comments:0,
                }
                
            }
            
            const uploadTask = uploadBytes(imageRef,payload.image, metadata)
            .then(()=>{
                console.log("metadata updated")
            })
            .catch((error)=>{console.log(error.message)})

           
            
        

        }
        (error)=>{console.log(error.message)}

       // dispatch(getarticlesAPI(payload.image.name,imageRef))

    }
}


// export function getarticlesAPI(imagename,imageRef)
// {
//     return (dispatch) =>
//     {
//         let imgurl=null
//         const imageurl = getDownloadURL(imageRef)
//         .then((url) => {
//             imgurl=url
          
//         })
//         imagename = 'images/'.concat(imagename)
        
//         const forestRef = ref(storage, `${imagename}`);

//         getMetadata(forestRef)
//         .then((metadata) => {
//             metadata.customMetadata.imgurl=imgurl;
//             console.log(metadata,'before');
//             dispatch(upload(metadata.customMetadata));
//             // dispatch(upload(metadata));
//             //dispatch(upload(null))
//             console.log("after");
//           })
//           .catch((error) => {
//             console.log(error.message)
            
//           });
//     }
// }


export function listALLAPI()
{
    return (dispatch) =>
    {
        const listRef = ref(storage, 'sriramsivakumar23@gmail.com/images');
        // const listOptions = {
        //     customMetadataFieldName: 'timestamp',
        //     customMetadataValue: 'string',
        //     endAt: timestamp.toString(),
            
        //   };

   listAll(listRef)
   .then((res) => {
    res.prefixes.forEach((folderRef) => {
     
    });
    let metadataAndURLs;
    async function fetchMetadataAndURLs() {
        
        try {
          const res = await listAll(listRef);
          for (const itemRef of res.items) {
            const metadata = await getMetadata(itemRef);
            console.log("Metadata for file:", itemRef.name);
            console.log(metadata.customMetadata);
      
            const starsRef = ref(storage, `${metadata.fullPath}`);
            const url = await getDownloadURL(starsRef);
            console.log("URL for file:", itemRef.name);
            console.log(url);
            metadataAndURLs.push({ metadata, url });
          }
        } catch (error) {
          console.error("Error fetching metadata or URLs:", error);
        }
      }
      
      fetchMetadataAndURLs();
      
      
      
  }).catch((error) => {
 
  });
        return metadataAndURLs;
    }
}


export function fetchALLAPI(email) {
    return (dispatch) => {
      const listRef = ref(storage, `${email}/images`);
  
      return listAll(listRef)
        .then(async (res) => {
          res.prefixes.forEach((folderRef) => {});
  
          const metadataAndURLs = [];
          try {
            const res = await listAll(listRef);
            for (const itemRef of res.items) {
              const metadata = await getMetadata(itemRef);
            //   console.log("Metadata for file:", itemRef.name);
            //   console.log(metadata.customMetadata);
  
              const starsRef = ref(storage, `${metadata.fullPath}`);
              const url = await getDownloadURL(starsRef);
            //   console.log("URL for file:", itemRef.name);
            //   console.log(url);
              const data =metadata.customMetadata
              metadataAndURLs.push({ data, url });
            }
            return metadataAndURLs;
          } catch (error) {
            console.error("Error fetching metadata or URLs:", error);
            throw error;
          }
        })
        .catch((error) => {
          console.error("Error listing files:", error);
          throw error;
        });
    };
  }
  