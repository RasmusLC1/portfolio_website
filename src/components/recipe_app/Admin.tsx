import SlideTemplate from "../dungeon_crawler/SlideTemplate";
import './RecipeApp.css'


const Admin = () => {
    const slides = [
        {image: `${import.meta.env.BASE_URL}/pictures/recipeapp/admin/signin.png`, description: 'Secure Encrypted signin to admin page'},
        {image: `${import.meta.env.BASE_URL}/pictures/recipeapp/admin/products_active.png`, description: 'Overview of available products'},
        {image: `${import.meta.env.BASE_URL}/pictures/recipeapp/admin/products_dropdown.png`, description: 'Dropdown ability to delete and deactivate products'},
        {image: `${import.meta.env.BASE_URL}/pictures/recipeapp/admin/products.png`, description: 'Example of deactivated product'},
        {image: `${import.meta.env.BASE_URL}/pictures/recipeapp/admin/users.png`, description: 'Overview of current users'},
        {image: `${import.meta.env.BASE_URL}/pictures/recipeapp/admin/orders.png`, description: 'Overview of current orders'},
      ];


  const codeString = `
// Upload products function
export function ProductForm({ product }: ProductFormProps) {
  // Determine the action function based on whether we have a product or not
  const actionFn = product
    ? updateProduct.bind(null, product.id) // Assuming your product model uses 'id' field
    : addProduct;

  // Initialize action state
  const [error, action] = useActionState(actionFn, {});

  // State for priceInCents
  const [priceInCents, setPriceInCents] = useState<number | undefined>(product?.priceInCents);

  return (
    <form action={action} className="space-y-8">
      {/* Name Field */}
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input 
          type="text" 
          id="name" 
          name="name" 
          required 
          defaultValue={product?.name || ""} 
        />
        {error?.name && <div className="text-destructive">{error.name}</div>}
      </div>

      {/* Price Field */}
      <div className="space-y-2">
        <Label htmlFor="priceInCents">Price In Cents</Label>
        <Input
          type="number"
          id="priceInCents"
          name="priceInCents"
          required
          value={priceInCents ?? ""}
          onChange={(e) => setPriceInCents(Number(e.target.value) || undefined)}
        />
        <div className="text-muted-foreground">
          {formatCurrency((priceInCents || 0) / 100)}
        </div>
        {error?.priceInCents && <div className="text-destructive">{error.priceInCents}</div>}
      </div>

      {/* Description Field */}
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          required
          defaultValue={product?.description || ""}
        />
        {error?.description && <div className="text-destructive">{error.description}</div>}
      </div>

      {/* File Field */}
      <div className="space-y-2">
        <Label htmlFor="file">File</Label>
        <Input type="file" id="file" name="file" required={product == null} />
        {product?.filePath && (
          <div className="text-muted-foreground">{product.filePath}</div>
        )}
        {error?.file && <div className="text-destructive">{error.file}</div>}
      </div>

      {/* Image Field */}
      <div className="space-y-2">
        <Label htmlFor="image">Image</Label>
        <Input type="file" id="image" name="image" required={product == null} />
        {product?.imagePath && (
          <Image src={product.imagePath} height={400} width={400} alt="Product" />
        )}
        {error?.image && <div className="text-destructive">{error.image}</div>}
      </div>

      <SubmitButton />
    </form>
  );
}
`;




const description = (
    <div className="text">
      <p className="description">
        Admin page with ability to edit products, users and orders
      </p>
      <ul className="features">
        <li>Upload products that users can interact with</li>
        <li>Adjust visibility of products to keep old products while preventing new purchases</li>
        <li>Order history and total sales for customers and products</li>
      </ul>
    </div>
  );
  
  


  return (

    <SlideTemplate
    id = "recipes" 
      headline="Recipe Website"
      description={description}
      codeString={codeString}
      language = "typescript"
      slides={slides}
    />
  );
};

export default Admin;
