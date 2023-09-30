// Here, for simplicity, we'll use a global variable. 
// For production, consider using a database like Cosmos DB.
let counter = 0;

module.exports = async function (context, req) {
    counter += 1;
    context.res = {
        body: { count: counter }
    };
};
