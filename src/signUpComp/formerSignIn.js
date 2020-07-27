function UserDetails() {
        
    const formik = useFormik({
        initialValues: {
            email: '',
            phone: '',
        },
                    
        onSubmit: values => {
            console.log('form value', formik.values);
            //window.location.href ="/";
        },

        validate: value => {
            let errors = {}
            if(!value.email) {
                errors.email= 'Your email is required to continue'
            }

            if(!value.phone) {
                errors.phone = 'Your phone number is required to continue'
            }
            
            return errors
        },
 });             
        return(
            <div className = 'leftClass'>
                 <form onSubmit={formik.handleSubmit}>
                                     
                 <div>   
                         <input
                             name="email"
                             type="text"
                             //onChange = {handleChange('email')}
                             {...formik.getFieldProps('email')}
                             required
                         />
                      
                         
                         {formik.touched.email && formik.errors.email ? <div className = "errorMessage">{formik.errors.email}</div> : null}
                         <label htmlFor="email">Email</label>
                 
                 </div>
                 
     
                 <div>
                             <input
                                 name="phone"
                                 type="phone"
                                 {...formik.getFieldProps('phone')}
                                 required
                                 
                             />
                             {formik.touched.phone && formik.errors.phone ? <div className = "errorMessage">{formik.errors.phone}</div> : null}
                             <label htmlFor="phone">Phone Number</label>
     
                             
                 </div>
                 <button type="submit" disabled={formik.isSubmitting}>
                     Continue
                 </button>
     
                 <p className="recover">
                 <Link to= '/SignIn'>Log In</Link> Instead | <Link to= '/'>See our Offer</Link>
                 </p>
             </form>
         </div> 
            
        );
    }
 


