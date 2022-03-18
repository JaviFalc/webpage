class Product{
  constructor(name, price, year){
    this.name = name;
    this.price = price;
    this.year = year;
  }
}


class UI {

  AddProduct(product){
    const ProductList = document.getElementById('Product-list');
    const element = document.createElement('div');
    element.innerHTML = `
    <div class="card text-center mb-3"> 
      <div class="card-body ml-3">
        <strong>Product Name: ${product.name} </strong>
        <strong>Product Price: ${product.price} </strong>
        <strong>Product Year: ${product.year}  </strong>
        <a class="btn btn-info" name="delete"> DELETE <a>
      </div>
    </div>`
    ProductList.appendChild(element);
    }

  DeleteProduct(element){
    
    if(element.name === 'delete'){
      element.parentElement.parentElement.parentElement.remove();
      this.ShowMessage("Product Deleted Successfully", "success");
    }
    

  }

  Resetform(){
    document.getElementById('Product').reset();
  }

  ShowMessage(message, CSSclass){
    const div = document.createElement('div');
    div.className = `alert alert-${CSSclass}`;
    div.appendChild(document.createTextNode(message));
    
    //Show in DOM
    const container = document.querySelector(".container");
    const App = document.querySelector("#App");

    container.insertBefore(div, App);

    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 1000);

  }
}

//DOM EVENTS

document.getElementById('Product')
.addEventListener('submit', (e) =>{
  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;
  const year = document.getElementById('year').value;
  

  const product = new Product (name, price, year);
  console.log(product);

  const ui = new UI();
  ui.AddProduct(product);
  ui.ShowMessage("Product Added Successfully", 'success');
  ui.Resetform();
  

  e.preventDefault();
})

document.getElementById('Product-list')
.addEventListener('click',(e) => {
  const ui = new UI();
  ui.DeleteProduct(e.target);
  
  e.preventDefault();
})