import { useState , useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const [name,SetName]=useState('Mario');

    const handleDelete=(id)=>{
        const newBlogs=blogs.filter(blog=>blog.id !==id);
        setBlogs(newBlogs);
    }

    useEffect(()=>{
        console.log("Use effect ran");
        console.log(name);
    },[name])

    return (

        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
            {/* <BlogList blogs={blogs.filter((blog)=> blog.author==='mario')} title="Mario's Blogs!" /> */}
            <p>{name}</p>
            <button onClick={()=>SetName('Luigi')}>Change Name</button>
        </div>
    );
}

export default Home;