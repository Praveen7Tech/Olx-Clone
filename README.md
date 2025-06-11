# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

........................


<!-- IMAGE PORTION -->

 <!-- {/* Images */}
            {image ? (
              <div className="image-preview">
                { image ?
                (<img
                  src={URL.createObjectURL(image)}
                  alt=""
                  style={{ width: "265px", marginRight: "10px" }}
                />)
                : id && localStorage.getItem(`image_${id}`) ?
                (<img src={localStorage.getItem(`image_${id}`)} alt="prev"/>)
                : null
                } 
               
                 <button
                    type="button"
                    onClick={() => setImage(null)}
                    className="remove-image-btn"
                    style={{
                      marginLeft: "10px",
                      background: "red",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      cursor: "pointer"
                    }}
                  >
                    Remove
                  </button>
              </div>
            ) : (
              <div className="form-section">
                <h3>Photos</h3>
                <div className="image-upload-grid">
                  <div className="image-upload-box">
                    <div className="upload-icon">📷</div>
                    <span>Add Photo</span>
                    <input
                      onChange={handleImageUpload}
                      type="file"
                      accept="image/*"
                    />
                  </div>
                  <span className="errorMessage">{imageError}</span>
                </div>
              </div>
            )} -->

