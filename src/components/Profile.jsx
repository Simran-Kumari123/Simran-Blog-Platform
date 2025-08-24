import React, { useState } from 'react'

function Profile() {
  const [user, setUser] = useState({
    name: 'simran',
    email: 'simrankumari02184@gmail.com',
    bio: 'Passionate writer and technology enthusiast. Love sharing knowledge and experiences through blogging.',
    avatar: 'https://avatar.iran.liara.run/public',
    joinDate: '2024-01-15',
    postsCount: 12,
    commentsCount: 45
  })

  const [isEditing, setIsEditing] = useState(false);
  const [avatar, setAvatar] = useState(user.avatar);
  const [editData, setEditData] = useState({ ...user })
  const [avatarPreview, setAvatarPreview] = useState(user.avatar);
  const [avatarFile, setAvatarFile] = useState(null);

  const handleEdit = () => {
    setEditData({ ...user })
    setIsEditing(true)
  }

  const handleSave = () => {
    setUser({ ...editData })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value
    })
  }

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatarPreview(e.target.result);
        setEditData({
          ...editData,
          avatar: e.target.result
        });
      };
      reader.readAsDataURL(file);
    }
  }

  const handleAvatarUrlChange = (e) => {
    const url = e.target.value;
    setAvatarPreview(url);
    setEditData({
      ...editData,
      avatar: url
    });
  }

  return (
    <div className="page-container">
      <div className="container">
        <div className="page-content">
          <h1>User Profile</h1>
          
          <div className="profile-content">
            <div className="profile-header">
              <div className="avatar-section">
                <img src={user.avatar} alt="Profile" className="avatar" />
                <div className="avatar-info">
                  <h2>{user.name}</h2>
                  <p className="member-since">Member since {user.joinDate}</p>
                </div>
              </div>
              
              {!isEditing && (
                <button onClick={handleEdit} className="edit-btn">
                  Edit Profile
                </button>
              )}
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <h3>{user.postsCount}</h3>
                <p>Posts Published</p>
              </div>
              <div className="stat-card">
                <h3>{user.commentsCount}</h3>
                <p>Comments Made</p>
              </div>
              <div className="stat-card">
                <h3>24</h3>
                <p>Followers</p>
              </div>
              <div className="stat-card">
                <h3>18</h3>
                <p>Following</p>
              </div>
            </div>

            {isEditing ? (
              <div className="edit-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={editData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={editData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="bio">Bio</label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={editData.bio}
                    onChange={handleChange}
                    rows="4"
                  />
                </div>

                <div className="form-group">
                  <label>Avatar</label>
                  <div className="avatar-upload-section">
                    <div className="avatar-preview">
                      <img src={avatarPreview} alt="Avatar preview" className="avatar-preview-img" />
                    </div>
                    <div className="avatar-options">
                      <div className="form-group">
                        <label htmlFor="avatarFile">Upload Image</label>
                        <input
                          type="file"
                          id="avatarFile"
                          accept="image/*"
                          onChange={handleAvatarChange}
                          className="file-input"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="avatarUrl">Or enter image URL</label>
                        <input
                          type="url"
                          id="avatarUrl"
                          placeholder="https://example.com/avatar.jpg"
                          value={editData.avatar}
                          onChange={handleAvatarUrlChange}
                          className="url-input"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-actions">
                  <button onClick={handleSave} className="submit-btn">
                    Save Changes
                  </button>
                  <button onClick={handleCancel} className="cancel-btn">
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="profile-details">
                <div className="detail-item">
                  <h3>Email</h3>
                  <p>{user.email}</p>
                </div>
                
                <div className="detail-item">
                  <h3>Bio</h3>
                  <p>{user.bio}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
