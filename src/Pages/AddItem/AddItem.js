import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../Firebase/Firebase.init';


const AddItem = () => {
    const [user] = useAuthState(auth);

    const onSubmit = event => {
        event.preventDefault()
        const email = user.email ;
        const name = event.target.name.value;
        const description = event.target.description.value;
        const quantity = event.target.quantity.value;
        const price = event.target.price.value;
        const picture = event.target.picture.value;
        const company = event.target.company.value;

        const item = {email,name,picture,description,quantity,price,company}

        const url = 'http://localhost:5000/item'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(result => {
                event.target.reset();
                toast.success(`Successfully added`,{ id:'success' })
                console.log(result);
            })
    };


    return (
        <div className='w-50 mt-5 mx-auto'>
            <h1 className='p-3'>Add New Item</h1>
            <form className='text-start' onSubmit={onSubmit}>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Email</label>
                    <input type="email" readOnly value={user?.email} name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Product Name</label>
                    <input type="text" required name='name' class="form-control"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Describe</label>
                    <textarea required name="description" class="form-control" cols="3" rows="2"></textarea>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Quantity</label>
                    <input type="number" required class="form-control" name="quantity"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Price</label>
                    <input type="number" required class="form-control" name="price"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Picture Url</label>
                    <input type="text" required class="form-control" name="picture"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Brand/supplier</label>
                    <input type="text" required class="form-control" name="company"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddItem;