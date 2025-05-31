export const sellProductFormValidate = (title, category, description, price,brand, image) => {
  const validTitle = /^[A-Za-z0-9 .'"()\-]{3,100}$/.test(title); 
  const validCategory = /^[A-Za-z]{3,50}$/.test(category);
  const validDescription = /^[A-Za-z0-9 .,!?'"\-()]{10,300}$/.test(description); 
  const validBrand = /^[A-Za-z0-9 .\-]{2,50}$/.test(brand); 
  const validPrice = /^\d+(\.\d{1,2})?$/.test(price); 
  const validImage = image != null
  console.log("zzz",image)

  return {
    titleMsg: !validTitle
      ? "Title must be 3–100 characters long and contain only letters, numbers, spaces, and common punctuation (e.g., . ' -)."
      : null,

    categoryMsg: !validCategory
      ? "Category must be 3–50 characters long and contain only letters (A–Z or a–z)."
      : null,

    descriptionMsg: !validDescription
      ? "Description must be 10–300 characters and may include letters, numbers, spaces, and punctuation like . , ! ? - ( )."
      : null,

    priceMsg: !validPrice
      ? "Price must be a valid number (e.g., 100 or 99.99) with up to 2 decimal places."
      : null,

    brandMsg: !validBrand
      ? "Brand name must be 2–50 characters and can include letters, numbers, spaces, hyphens, and periods."
      : null,
    imageMsg: !validImage ? "Image is required." : null
  };
};
