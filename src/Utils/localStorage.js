import { toast } from 'react-toastify';

// // get
// export const loadWishlist = () => {
//   try {
//     const data = localStorage.getItem('wishlist');
//     return data ? JSON.parse(data) : [];
//   } catch (err) {
//     console.log(err);
//     return [];
//   }
// };
//? get
export const loadInstallation = () => {
  try {
    const data = localStorage.getItem('installList');
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

// // save
// export const updateList = product => {
//   const wishlist = loadWishlist();

//   try {
//     const isDuplicate = wishlist.some(p => p.id === product.id);
//     if (isDuplicate) return toast.warning('Already added in wishlist');
//     const updatedWishlist = [...wishlist, product];
//     localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
//     toast.success('Added to WishList');
//   } catch (err) {
//     console.log(err);
//   }
// };
//? save
export const updateList = app => {
  const installList = loadInstallation();

  try {
    const isDuplicate = installList.some(p => p.id === app.id);
    if (isDuplicate) return toast.warning('Already added in Installlist');
    const updatedInstallList = [...installList, app];
    localStorage.setItem('installList', JSON.stringify(updatedInstallList));
    toast.success('Added to Install List');
  } catch (err) {
    console.log(err);
  }
};

// delete
// export const removeFromWishlist = id => {
//   const wishlist = loadWishlist();
//   try {
//     const updatedWishlist = wishlist.filter(p => p.id !== id);
//     localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
//   } catch (err) {
//     console.log(err);
//   }
// };
//? delete
export const removeFromInstallList = id => {
  const installList = loadInstallation();
  try {
    const updatedInstallList = installList.filter(p => p.id !== id);
    localStorage.setItem('installList', JSON.stringify(updatedInstallList));
  } catch (err) {
    console.log(err);
  }
};
