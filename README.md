<h1>GET Login</h1>
<p>Returns a login endpoint</p>
<ul>
  <li>
    <h2>URL</h2>
    <p>/users/login</p>
  </li>
  
  <li>
    <h2>Method</h2>
    <p>GET</p>
  </li>
  
  <li>
    <h2>URL Params</h2>
    <p>None</p>
  </li>
  
  <li>
    <h2>Data Params</h2>
    <p>None</p>
  </li>
  
  <li>
    <h2>Success Response</h2>
    <p>Code: 200</p>
    <p>Content: </p>
    <code>
      {
        message: "Welcome to Hackerbay. You may login."
      }
    </code>
  </li>
</ul>

#second
<h1>Login</h1>
<p>Logs in a user by assigning a JWT</p>
<ul>
  <li>
    <h2>URL</h2>
    <p>/users/login</p>
  </li>
  
  <li>
    <h2>Method</h2>
    <p>POST</p>
  </li>
  
  <li>
    <h2>URL Params</h2>
    <p>None</p>
  </li>
  
  <li>
    <h2>Request Body</h2>
    <code>
      {
        "username":"***your_username***",
        "password": "***your_password***"
      }
    </code>
  </li>
  
  <li>
    <h2>Success Response</h2>
    <p>Code: 200</p>
    <p>Content: </p>
    <code>
      {
        "message": "Login Successful! Welcome ***your_username***"
      }
    </code>
  </li>
  
  <li>
    <h2>Error Response</h2>
    <p>Code: 401</p>
    <p>Content: </p>
    <code>
      {
        "message": "You must provide a valid username and password"
      }
    </code>
  </li>
</ul>


#jsonpatch
<h1>Patch JSON</h1>
<p>Patches a JSON object</p>
<ul>
  <li>
    <h2>URL</h2>
    <p>/jsonpatch</p>
  </li>
  
  <li>
    <h2>Method</h2>
    <p>PATCH</p>
  </li>
  
  <li>
    <h2>URL Params</h2>
    <p>None</p>
  </li>
  
  <li>
    <h2>Request Body</h2>
    <p>'obj' is the object to be patched and 'patchObj' is the patch. 'op' property of 'patchObj' represents patch operations and it accepts only three; add,remove, and replace. The 'key' and 'value' properties represent the key-value pair to be patched.</p>
    <code>
      {
        "obj": {
          "name": "Elon",
          "age": 21,
          "gender": "Female"
        },
        "patchobj": {
          "op": "replace",
          "key": "gender",
          "value": "Male"
        }
      }
    </code>
  </li>
  
  <li>
    <h2>Success Response</h2>
    <p>Successful Response comprises of the initial object, an array containing the patch</p>
    <p>Code: 200</p>
    <p>Content: </p>
    <code>
      {
          "message": "Patch Successful",
          "initialObj": {
              "name": "Elon",
              "age": 21,
              "gender": "Female"
          },
          "jsonPatchArray": [
              {
                  "op": "replace",
                  "path": "/gender",
                  "value": "Male"
              }
          ],
          "patchedObj": {
              "name": "Elon",
              "age": 21,
              "gender": "Male"
          }
      }
    </code>
  </li>
  
  <li>
    <h2>Error Response</h2>
    <p>Code: 400</p>
    <p>Content: </p>
    <code>
      {
        "message": "You must provide a valid object and a patch"
      }
    </code>
    <h3>OR</h3>
    <p>Code: 401</p>
    <p>Content: </p>
    <code>
      {
        "message": "Authentication Failed ! Login first!"
      }
    </code>
  </li>
</ul>

#thumbnail
<h1>Create Thumbnail</h1>
<p>Downloads an image from a url provided in a request body and resizes it into a 50X50 thumbnail</p>
<ul>
  <li>
    <h2>URL</h2>
    <p>/thumbnails</p>
  </li>
  
  <li>
    <h2>Method</h2>
    <p>GET</p>
  </li>
  
  <li>
    <h2>URL Params</h2>
    <p>None</p>
  </li>
  
  <li>
    <h2>Request Body</h2>
    <p>Request body comprises of only the url to the image. N/B: File extensions are figured out by the controller assigned to this request.(Do not worry about file extensions)</p>
    <code>
      {
        "imgurl": "https://informationcradle.com/kenya/wp-content/uploads/2015/12/maureen-kunga.jpg"
      }
    </code>
  </li>
  
  <li>
    <h2>Success Response</h2>
    <p>Successful Response comprises of a unique name of the created thumbnail stored in thumbnails directory in the root folder.</p>
    <p>Code: 200</p>
    <p>Content: </p>
    <code>
      {
          "message": "Thumbnail created",
          "thumbnail": "c5c656a0-a457-11e8-bef4-a1dafa81ec9e.jpg"
      }
    </code>
  </li>
  
  <li>
    <h2>Error Response</h2>
    <p>Code: 400</p>
    <p>Content: </p>
    <code>
      {
        "message": "You must provide a valid image URL"
      }
    </code>
    <h3>OR</h3>
    <p>Code: 401</p>
    <p>Content: </p>
    <code>
      {
        "message": "Authentication Failed ! Login first!"
      }
    </code>
  </li>
</ul>
