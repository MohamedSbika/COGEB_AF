import {  useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiFillEdit } from "react-icons/ai";
import { BsFillPlusSquareFill } from 'react-icons/bs'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { firebaseApp } from '../firebase.js'
import { loddingStart, signoutFailed, signoutSuccess, userDeleteFail, userDeleteSuccess, userUpdateFailed, userUpdateSuccess } from '../redux/user/userSlice.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import PostCard from '../components/PostCard.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import Loading from '../components/Loading.jsx';
import { clearSavedListing } from '../redux/saveListing/saveListingSlice.js';
import Footer from '../components/Footer.jsx';




const Profile = () => {
  const { currentUser } = useSelector(state => state.user)
  const [file, setFile] = useState(undefined);
  const [uploadingPerc, setUploadingPerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const [activeButton, setActiveButton] = useState('posts');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === 'posts') {
      posts();
    } else if (buttonName === 'projects') {
      projects();
    }
  };

  const [userPosts, setUserPost] = useState({
    isPostExist: false,
    posts: []
  })
  const [userProjects,setUserProject]=useState({
    isProjectExist: false,
    projects: []
  })

  const [userPostLoading, setUserPostLoading] = useState(false)
  const [userProjectLoading, setUserProjectLoading] = useState(false)


  const fileRef = useRef(null);
  const { loading } = useSelector((state => state.user))
  const dispatch = useDispatch();
  const navigate = useNavigate()



  const handleFileUpload = (file) => {
    if (file) {
      const fireBaseStorage = getStorage(firebaseApp);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(fireBaseStorage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on("state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadingPerc(Math.round(progress));
        },(error) => {
          setFileUploadError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(downloadUrl => {
            setFormData({ ...formData, avatar: downloadUrl });
          });
        }
      );
    }
  }

  const projects =()=>{
    document.getElementById("Projects").hidden=false;
    document.getElementById("Posts").hidden=true;
  }
  const posts =()=>{
    document.getElementById("Projects").hidden=true;
    document.getElementById("Posts").hidden=false;
  }
  useEffect(() => {
    
    handleFileUpload(file)
  }, [file])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true)
    try {
      dispatch(loddingStart())
      const res = await fetch(`api/users/update/${currentUser._id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const userData = await res.json();


      //===checking reqest success or not ===//
      if (userData.success === false) {
        dispatch(userUpdateFailed(userData.message))

        //===showing error in tostify====//
        toast.error(userData.message, {
          autoClose: 5000,
        })
      }
      else {
        dispatch(userUpdateSuccess(userData))
        toast.success('Profile updated successfully', {
          autoClose: 2000,
        })
      }
    } catch (error) {
      dispatch(userUpdateFailed(error.message))
      toast.error(error.message, {
        autoClose: 2000,
      })
    }
  }


  const handleDelete = async () => {
    try {
      dispatch(loddingStart())
      const res = await fetch(`api/users/delete/${currentUser._id}`, {
        method: 'DELETE'
      })
      const resData = await res.json();
      //===checking reqest success or not ===//
      if (resData.success === false) {
        dispatch(userDeleteFail(resData.message))

        //===showing error in tostify====//
        toast.error(resData.message, {
          autoClose: 2000,
        })
      }
      else {
        dispatch(userDeleteSuccess())
      }

    } catch (error) {
      dispatch(userDeleteFail(error.message))
      toast.error(error.message, {
        autoClose: 2000,
      })
    }
  }

  const handleLogOut = async () => {
    try {
      const res = await fetch('api/auth/signout');
      const data = await res.json();
      if (data.success === false) {
        dispatch(signoutFailed(data.message))
        toast.error(data.message, {
          autoClose: 2000,
        })
      }
      else {
        dispatch(signoutSuccess())
        dispatch(clearSavedListing())
      }
    } catch (error) {
      dispatch(signoutFailed(error.message))
      toast.error(error.message, {
        autoClose: 2000,
      })
    }
  }

  // ======Loading User Posts  =====//
  useEffect(() => {
    if(currentUser.role=="user"){
      document.getElementById("Projects").hidden=true;
      document.getElementById("Posts").hidden=true;

    }else{
      document.getElementById("Projects").hidden=true;
      document.getElementById("Posts").hidden=false;
    }


    const loadPost = async () => {
      try {
        setUserPostLoading(true)
        const res = await fetch(`api/users/posts/${currentUser._id}`)
        const data = await res.json();
        if (data.success === false) {
          toast.error(data.message, {
            autoClose: 2000,
          });
          setUserPostLoading(false)
          dispatch(signoutSuccess())
        }
        else {
          setUserPost({
            ...userPosts,
            isPostExist: true,
            posts: data,
          });
          setUserPostLoading(false)
        }
      } catch (error) {
        toast.error(error.message, {
          autoClose: 2000,
        });
        setUserPostLoading(false)
      }
    }
    const loadProject = async () => {
      try {
        setUserProjectLoading(true)
        const res = await fetch(`api/users/projects/${currentUser._id}`)
        const data = await res.json();
        if (data.success === false) {
          toast.error(data.message, {
            autoClose: 2000,
          });
          setUserProjectLoading(false)
          dispatch(signoutSuccess())
        }
        else {
          setUserProject({
            ...userProjects,
            isProjectExist: true,
            projects: data,
          });
          setUserProjectLoading(false)
        }
      } catch (error) {
        toast.error(error.message, {
          autoClose: 2000,
        });
        setUserProjectLoading(false)
      }
    }
    loadPost();
    loadProject();
  }, [])

  // ======Handling User Post DELETE  =====//
  const handlePostDelete = async (postId) => {
    try {
      const res = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
      })
      const data = await res.json();

      //===checking reqest success or not ===//
      if (data.success === false) {
        //===showing error in tostify====//
        toast.error(data.message, {
          autoClose: 2000,
        })
      }
      else {
        const restPost = userPosts.posts.filter(post => post._id !== postId)
        setUserPost({
          ...userPosts,
          posts: restPost
        })

        toast.success(data, {
          autoClose: 2000,
        })

      }
    } catch (error) {
      toast.error(error.message, {
        autoClose: 2000,
      })
    }
  }

  const handleProjectDelete = async (projectId) => {
    try {
      const res = await fetch(`/api/projects/${projectId}`, {
        method: 'DELETE',
      })
      const data = await res.json();

      //===checking reqest success or not ===//
      if (data.success === false) {
        //===showing error in tostify====//
        toast.error(data.message, {
          autoClose: 2000,
        })
      }
      else {
        const restProject = userProjects.projects.filter(project => project._id !== projectId)
        setUserProject({
          ...userProjects,
          projects: restProject
        })

        toast.success(data, {
          autoClose: 2000,
        })

      }
    } catch (error) {
      toast.error(error.message, {
        autoClose: 2000,
      })
    }
  }



  return (

    <>
      <section >
      <div className="w-full h-32 bg-gray-500/50 rounded-lg"></div>        <div className="max-w-7xl sm:max-w-full mx-auto grid md:gap-6 temp lg:grid-cols-4  md:grid-cols-5 grid-cols-1 items-start">
          <div className="profile_info p-5 bg-white  w-full  md:col-span-2 lg:col-span-1  md:max-h-full md:min-h-screen h-full col-span-1 ">



            <form className='w-full' onSubmit={handleSubmit} >
              <div className='mb-3'>
                <div className="image_container w-full flex items-center justify-center  relative max-w-[100px] mx-auto">

                  <input onChange={(e) => setFile(e.target.files[0])}
                    hidden accept='image/*'
                    type="file" name="profile"
                    id="profile_image"
                    ref={fileRef}
                  />

                  <img src={formData.avatar || currentUser.avatar} onClick={() => fileRef.current.click()} className='h-24 w-24 mb-3 rounded-full border-[1px]  border-[#3A5A40]' alt="profile image" />
                  <i className='h-6 w-6 rounded-full flex items-center justify-center bg-[#3A5A40] text-white absolute bottom-3 right-0'><AiFillEdit /></i>
                </div>

                {
                  fileUploadError ? (
                    <p className='text-xs text-red-700 font-medium text-center'>File upload failed</p>
                  ) : uploadingPerc > 0 && uploadingPerc < 100 ? (
                    <p className='text-xs text-black font-medium text-center'>File uploading...{uploadingPerc}%</p>
                  ) : uploadingPerc === 100 && (
                    <p className='text-xs text-green-600 font-medium text-center'>File uploaded!!!</p>
                  )
                }
              </div>


              <label className='text-left font-heading text-sm pl-1 '>Nom d'utilisateur</label>
              <input
                defaultValue={currentUser.username}
                name='username'
                type="text" placeholder="Username"
                className="form_input bg-slate-200 rounded-md !pl-3 mt-1 !border-[1px] focus:!border-[#3A5A40] mb-3"
                onChange={handleChange}
              />


              <label className='text-left font-heading text-sm pl-1 '>Email</label>
              <input
                defaultValue={currentUser.email}
                name='email'
                type="email" placeholder="email"
                className="  form_input bg-slate-200 rounded-md !pl-3 !border-[1px] focus:!border-[#3A5A40] mb-3"
                onChange={handleChange}
              />


              <label className='text-left font-heading text-sm pl-1 '>Mot de Passe</label>
              <input
                type="password"
                name='password'
                placeholder="Mot de Passe"
                className="mt-1  form_input bg-slate-200 rounded-md !pl-3 !border-[1px] focus:!border-[#3A5A40]"
                onChange={handleChange}
              />

              <button disabled={loading} type='submit' className='py-2 px-5 bg-[#3A5A40] text-white rounded-md w-full font-heading  mt-4 hover:opacity-90'>
                {
                  loading ? 'Loading...' : 'Enregistrer'
                }
              </button>

            </form>
            <div className="btn_container">
              <div className=" flex justify-between items-center md:flex-col xl:flex-row mt-2">

                <button onClick={handleLogOut} className='md:w-full font-heading  xl:w-auto py-2 px-5 bg-red-800 text-white rounded-md   mt-2 hover:opacity-90 text-sm'>Deconnexion</button>

                <button onClick={handleDelete} className='md:w-full xl:w-auto py-2 px-5 bg-red-800  text-white font-heading rounded-md mt-2 hover:opacity-90 text-sm'>Supprimer
                </button>
              </div>
            </div>
          </div>

<div id="adminAdd" className='mt-5 md:mt-0 col-span-3 post_section profile_info p-2 flex flex-col   bg-transparent  w-full overflow-y-auto'>
                {/*======== post section start here ========= */}
          <div id="Posts" className="  ">
              <div className=" flex  items-center text-center justify-center md:flex-col xl:flex-row mt-2">

              <button 
        onClick={() => handleButtonClick('posts')} 
        className={`md:w-full font-heading xl:w-[200px] py-2 px-2 ${activeButton === 'posts' ? 'bg-emerald-600 '  : 'bg-lime-600'} text-white rounded-md mt-2 hover:opacity-90 text-sm mx-32`}
      >
        Posts
      </button>
      <button 
        onClick={() => handleButtonClick('projects')} 
        className={`md:w-full xl:w-[200px] py-2 px-2 ${activeButton === 'projects' ? 'bg-emerald-600 '  : 'bg-lime-600'} text-white font-heading rounded-md mt-2 hover:opacity-90 text-sm mx-32`}
      >
        Projects
      </button>
            </div>
            {
              userPostLoading
                ?
                <div>
                  <Loading />
                  <p className='text-[#3A5A40] text-center font-heading text-xl'>Loading your post…</p>
                </div>
                :
                <div className="grid post_card grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 md:h-full overflow-scroll pb-10 px-4 scrollbar-hide md:pt-5">

                  {/* ADD NEW POST BUTTON  */}
                  <div className="cursor-pointer rounded-md  bg-white  shadow-lg hover:shadow-xl">
                    <button onClick={() => navigate('/create_post')} type='submit' className=' px-5 bg-slate-300 font-heading shadow-lg text-black text-lg  rounded-sm hover:opacity-95 w-full h-full flex justify-center items-center flex-col py-10 sm:py-10'>
                      <BsFillPlusSquareFill className='text-center md:mb-3 md:text-5xl text-black text-sm sm:text-xl' />
                      Creer une Post
                    </button>
                  </div>

                  {
                    userPosts.isPostExist
                    &&
                    userPosts.posts.map(post => <PostCard key={post._id} postInfo={{ post, handlePostDelete }} />)
                  }
                </div>
            }
          </div>
          { /*project items*/}
          <div id="Projects" className="">
              <div className=" flex  items-center text-center justify-center md:flex-col xl:flex-row mt-2">


              <button 
        onClick={() => handleButtonClick('posts')} 
        className={`md:w-full font-heading xl:w-[200px] py-2 px-2 ${activeButton === 'posts' ? 'bg-emerald-600 '  : 'bg-lime-600'} text-white rounded-md mt-2 hover:opacity-90 text-sm mx-32`}
      >
        Posts
      </button>
      <button 
        onClick={() => handleButtonClick('projects')} 
        className={`md:w-full xl:w-[200px] py-2 px-2 ${activeButton === 'projects' ? 'bg-emerald-600 '  : 'bg-lime-600'} text-white font-heading rounded-md mt-2 hover:opacity-90 text-sm mx-32`}
      >
        Projects
      </button>
            </div>
            {
              userProjectLoading
                ?
                <div>
                  <Loading />
                  <p className='text-[#3A5A40] text-center font-heading text-xl'>Loading your projects</p>
                </div>
                :
                <div className="grid post_card grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 md:h-full overflow-scroll pb-10 px-4 scrollbar-hide md:pt-5">

                  {/* ADD NEW Project BUTTON  */}
                  <div className="cursor-pointer rounded-md  bg-white  shadow-lg hover:shadow-xl">
                    <button onClick={() => navigate('/create_project')} type='submit' className=' px-5 bg-slate-300 font-heading shadow-lg text-black text-lg  rounded-sm hover:opacity-95 w-full h-full flex justify-center items-center flex-col py-10 sm:py-10'>
                      <BsFillPlusSquareFill className='text-center md:mb-3 md:text-5xl text-black text-sm sm:text-xl' />
                      Créer Projet
                    </button>
                  </div>

                  {
                    userProjects.isProjectExist
                    &&
                    userProjects.projects.map(project => <ProjectCard key={project._id} projectInfo={{ project, handleProjectDelete }} />)
                  }
                </div>
            }
          </div>
</div>

          



          

        </div>
        <ToastContainer />

      </section>
      <Footer />
    </>
  )
}

export default Profile