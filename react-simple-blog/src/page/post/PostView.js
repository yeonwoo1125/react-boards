import React, { useEffect, useState } from 'react';
import { getPostByNo } from '../../Data';
import './Post.css';
 
const PostView = ({ history, location, match }) => {
  const [ data, setData ] = useState({});
 
  const { no } = match.params;
 
  useEffect(() => {
    setData(getPostByNo(no));
  }, [ ]);
 
  return (
    <>
      <h2 align="center">�Խñ� ������</h2>
 
      <div className="post-view-wrapper">
        {
          data ? (
            <>
              <div className="post-view-row">
                <label>�Խñ� ��ȣ</label>
                <label>{ data.no }</label>
              </div>
              <div className="post-view-row">
                <label>����</label>
                <label>{ data.title }</label>
              </div>
              <div className="post-view-row">
                <label>�ۼ���</label>
                <label>{ data.createDate }</label>
              </div>
              <div className="post-view-row">
                <label>��ȸ��</label>
                <label>{ data.readCount }</label>
              </div>
              <div className="post-view-row">
                <label>����</label>
                <div>
                  {
                    data.content
                  }
                </div>
              </div>
            </>
          ) : '�ش� �Խñ��� ã�� �� �����ϴ�.'
        }
        <button className="post-view-go-list-btn" onClick={() => history.goBack()}>������� ���ư���</button>
      </div>
    </>
  )
}
 
export default PostView;
