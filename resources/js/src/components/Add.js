import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Master from './Master';
import api from '../api';

const Add = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const onAddSubmit = async () => {
        setLoading(true);
        try {
            await api.addPosts({ title, description, });
            navigate(-1);
        } catch {
            alert('新增錯誤!');
        } finally {
            setLoading(false);
        }
    }

    return (
        <Master title="新增">
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
                    <button className='btn btn-success' type="button" onClick={onAddSubmit} disabled={loading}>
                        {loading ? "讀取中..." : "新增"}
                    </button>
                </div>
            </form>
        </Master>
    );
}

export default Add;
