import { useEffect, useState } from "react";
import "./Navbar.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import { onAuthStateChanged } from "firebase/auth";
import { auth, LogOut } from "../../utils/firebase";
import { Link } from "react-router-dom";


const Navbar = ({ setIsLogin, products,  setFilterProducts }) => {

  const [user, setUser] = useState(null)
  const [searchValue, setSearchValue] = useState("")
  const [categories, setCategories] = useState([])

 console.log("set fill",setFilterProducts)
  const openLogModal = ()=>{
    setIsLogin(true)
  }

  // filter based on category
  useEffect(() => {
    if (products && Array.isArray(products)) {
      const categories = [...new Set(products.map(pro => pro.category?.trim()))];
      setCategories(categories);
    }
  }, [products]);

  const filterCategory= (category)=>{
      const filteredProductsCat = products.filter(product =>
        product.category?.toLowerCase() === category.toLowerCase()
      )
      console.log("filter cat",category,"val",filteredProductsCat)
      setFilterProducts(filteredProductsCat)
    
  }

  // search product
  const SearchProducts = () => {
    const filtered = products.filter(item =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilterProducts(filtered);
  };

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser) =>{
      setUser(currentUser)
    })
    return ()=> unSubscribe()
  },[])

  const UserLogout = ()=>{
    LogOut()
  }

  return (
    <>
      {/* Main Navbar */}
      <div className="navbar">
        <div className="navbar-container">
          {/* Logo and Location */}
          <div className="nav-left">
            <Link to={"/"} onClick={() => setFilterProducts(products)}>
            <img
              className="logo"
              src="https://statics.olx.in/external/base/img/olxLogo/olx_logo_2025.svg"
              alt="OLX Logo"
            />
            </Link>
            {/* Location Selector */}
            <div className="location-selector">
              <i className="fas fa-search location-icon"></i>
              <select className="location-dropdown">
                <option value="india">India</option>
                <option value="mumbai">Kerala</option>
                <option value="delhi">Ernakulam</option>
                <option value="bangalore">Nilambur</option>
              </select>
            </div>
          </div>

          {/* Search Bar */}
          <div className="nav-midd">
            <div className="search-container">
              <input onChange={(e) => {setSearchValue(e.target.value)}} className="search-box" type="text" placeholder='Search "Bikes"' />
              <button onClick={SearchProducts} className="search-btn">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="nav-right">
            {/* Language Selector */}
            <div className="language-selector">
              <span>ENGLISH</span>
              <i className="fas fa-chevron-down"></i>
            </div>

            {/* Favorites */}
            <div className="favorites">
              <i className="far fa-heart"></i>
            </div>

            {/* Login */}
            {!user ? (
              <button onClick={openLogModal} className="login-btn">Login</button>
            ) : (
              <div className="user-dropdown">
                <div className="user-profile">
                  <div className="user-avatar">
                    <i className="fas fa-user"></i>
                  </div>
                  <span className="user-name">{user.displayName}</span>
                  <i className="fas fa-chevron-down dropdown-arrow"></i>
                </div>

                <div className="dropdown-menu">
                  <div className="dropdown-item user-info">
                    <div className="user-avatar-large">
                      <i className="fas fa-user"></i>
                    </div>
                    <div className="user-details">
                      <div className="user-name-large">{user.displayName}</div>
                      <div className="user-email">{user.email}</div>
                    </div>
                  </div>
                  <div className="dropdown-item">
                    <i className="fas fa-plus"></i>
                    <Link to={"/myAdds"}><button className="dropdown-item">My add</button></Link>
                  </div>
                  <div className="dropdown-divider"></div>
                  <button onClick={UserLogout} className="dropdown-item logout-btn">
                    <i className="fas fa-sign-out-alt"></i>
                    Logout
                  </button>
                </div>
              </div>
            )}
            

            {/* Sell Button */}
            <button className="sell-btn">
             <Link to={"/sellProduct"}><i className="fas fa-plus"></i></Link> 
              SELL
            </button>
          </div>
        </div>
      </div>

      <div className="category-navbar">
        <div className="category-container">
          <div className="category-item dropdown">
            <span onClick={()=> setFilterProducts(products)}>ALL CATEGORIES</span>
          </div>
          {categories.map(category=>(
            <div key={category} onClick={()=> filterCategory(category)} className="category-item" >
            {category}
            </div> 
          ))}
        </div>
      </div>
      
    </>
  )
}

export default Navbar
