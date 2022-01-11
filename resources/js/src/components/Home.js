import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Master from './Master';
import api from '../api';

const Home = () => {

    const [posts, setPosts] = useState(null);

    const fetchPosts = () => {
        api.getAllPosts().then(res => {
            const result = res.data;
            setPosts(result.data);
        })
    }

    useEffect(() => { fetchPosts(); }, []);

    const renderPosts = () => {
        if (!posts) {
            return (
                <tr>
                    <td colSpan="4">
                        載入中....
                    </td>
                </tr>
            );
        }
        if (posts.length === 0) {
            return (
                <tr>
                    <td colSpan="4">
                        目前無事件，新增一個吧!
                    </td>
                </tr>
            );
        }

        return posts.map((post) => (
            <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.description}</td>
                <td>
                    <Link
                        className='btn btn-warning'
                        to={`edit/${post.id}`}
                    >
                        編輯
                    </Link>
                </td>
                <td>
                    <button
                        type='button'
                        className='btn btn-danger'
                        onClick={() => {
                            var ans = confirm(`確認要刪除「` + post.title + `」嗎？`);
                            if (ans) {
                                api.deletePosts(post.id)
                                    .then(fetchPosts)
                                    .catch(err => { alert("刪除錯誤"); })
                            }
                        }}
                    >刪除
                    </button>
                </td>
            </tr >
        ))

    }

    return (
        <Master title="React-Laravel CRUD">
            <Link to="add" className="btn btn-primary">新增一筆</Link>
            <div className='table-responsive'>
                <table className='table table-striped mt-4'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>標題</th>
                            <th>描述</th>
                            <th colSpan={2}>動作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderPosts()}
                    </tbody>
                </table>
            </div>
        </Master>
    );
}

export default Home;
