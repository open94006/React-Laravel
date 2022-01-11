import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Master from './Master';
import api from '../api';

const Edit = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const onEditSubmit = async () => {
        setLoading(true);
        try {
            await api.updatePosts({ title, description, }, id);
            navigate(-1);
        } catch {
            alert('編輯錯誤!');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        api.getOnePosts(id).then(
            res => {
                const result = res.data;
                const post = result.data
                setTitle(post.title);
                setDescription(post.description);
            }
        )
    }, [])

    return (
        <Master title="編輯">
            <form>
                <div className="form-group">
                    <label>標題</label>
                    <input className='form-control' type="text" value={title} onChange={e => setTitle(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label>描述</label>
                    <textarea className='form-control' value={description} onChange={e => setDescription(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                    <button className='btn btn-success' type="button" onClick={onEditSubmit} disabled={loading}>
                        {loading ? "讀取中..." : "更新"}
                    </button>
                </div>
            </form>
        </Master>
    );
}

export default Edit;
