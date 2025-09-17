import swaggerJSDoc from "swagger-jsdoc";
const option={
    definition:{
        openapi:"3.0.0",
        info:{
            title:"Blog API",
            version:"1.0.0",
            description:"API documentation for the Blog application"
        },
        servers:[
            {
                url:"http://localhost:5000"
            }
        ]
    },
    apis:[
        "./Routes/*.js"
    ]
}
const swaggerDocs=swaggerJSDoc(option)
export default swaggerDocs