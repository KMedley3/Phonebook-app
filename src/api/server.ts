export const server_calls = {
    get: async () => {
        const response = await fetch(`https://phonebook-8lqh.onrender.com/api/contacts`,
        {
            method: 'GET',
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": "Bearer e6eb11db7772380f858769b8964fa784731baa7f061bdc06"
            }
           

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://phonebook-8lqh.onrender.com/api/contacts`,
        {
            method: 'POST',
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": "Bearer e6eb11db7772380f858769b8964fa784731baa7f061bdc06"
            },
            body: JSON.stringify(data)

           

        });

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()

    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://phonebook-8lqh.onrender.com/api/contacts/${id}`,
        {
            method: 'POST',
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": "Bearer e6eb11db7772380f858769b8964fa784731baa7f061bdc06"
            },
            body: JSON.stringify(data)

           

        });

        if (!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://phonebook-8lqh.onrender.com/api/contacts/${id}`,
        {
            method: 'DELETE',
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": "Bearer e6eb11db7772380f858769b8964fa784731baa7f061bdc06"
            }
           

        });

        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    }
}
