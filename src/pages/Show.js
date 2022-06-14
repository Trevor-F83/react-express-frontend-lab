import { useState } from 'react';

const Show = (props) => {
    
    const avatarURL = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";
    const id = props.match.params.id;    
    const person = props.people.find(p => p._id === id); 
    
    const [ editForm, setEditForm ] = useState(person);
    
    const handleChange = (event) => {
        setEditForm({
            ...editForm,
            [event.target.name]: event.target.value
        });
    };
    const handleSubmit = (event) => {
        //prevent defaault behavior of a form submission
        event.preventDefault();
        const { name, title, image, _id } = editForm;
        props.updatePeople({ name, title, image }, _id);
    };

    const handleRemovePerson = (id) => {
        //invoke deletePeople function
        //redirect user to Index page...prevents errors
        props.deletePeople(id);
    };
    
        return (
        <div className="person">
            <h1>{person.name}</h1> 
            <h2>{person.title}</h2>
            {
                person.image
                ? <img src={person.image} alt={person.name} />
                : <img src={avatarURL} alt="placeholder" />  
            }
            {/* without the function in the front, this code will auto delete the person as soon as you click on them. */}
            <button onClick={() => handleRemovePerson(person._id)}>Delete This Person</button>
            <form onSubmit={handleSubmit}>
                <input 
                name="name" 
                value={editForm.name}
                onChange={handleChange}
                type="text" 
                />
                <input
                 name="title"
                 value={editForm.title}
                 onChange={handleChange}
                 type="text" 
                 />
                <input
                 name="image"
                 value={editForm.image}
                 onChange={handleChange}
                 type="text" 
                 />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};
export default Show;
        
        
        // Line 10 the "id" here is being called from Main.js
        // Line 9 this line actually gets the person details
        // line 13 renders the name 
        // line 14 renders the title 
        // lines 15 - 19 logic to find if image is available. Render if yes