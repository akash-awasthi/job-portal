import React from 'react'

export default function ContactUs() {
    return (
        <>
        <div>
            <div>

                <div class="jumbotron jumbotron-sm">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-lg-12">
                                <h1 class="h1">
                                    Contact us <small>Feel free to contact us</small></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="well well-sm">
                                <form>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                   <br />

                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="name">
                                                Message</label>
                                            <textarea name="message" id="message" class="form-control" rows="9" cols="25" required="required"
                                                placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                    <br></br>
                                    <div class="col-md-12">
                                        <button type="submit" class="btn btn-primary pull-right" id="btnContactUs">
                                            Send Message</button>
                                  
                                    </div>
                                    <br />
                                 </form>
                            </div>

                        
                    </div>
                </div>
            </div>
          </div>

           </div>
</>
       
    )
}

