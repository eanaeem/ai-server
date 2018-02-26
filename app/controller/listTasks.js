import axios from 'axios';

const ListTasks = (req, res) => {
    console.log('listtasks');
    console.log('test**');
    axios.get('https://api.nonprod.aws.dentsufusion.com/connector_tasks/list-tasks')
        .then((response) => {
            console.log(response.data);
            res.send(response.data)
        })
        .catch(error=>console.log('list task error',error));
};

export default ListTasks;
