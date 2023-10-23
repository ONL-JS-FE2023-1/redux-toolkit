import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from 'store/slices/usersSlice';

const UserList = (props) => {
    const { users, isLoading, error } = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (
        <section>
            {isLoading && <div>Loading</div>}
            {error && <div>Error</div>}
            {users.length > 0 && users.map((u) => <article key={u.id}>{JSON.stringify(u)}</article>)}
        </section>
    );
}

export default UserList;

/*

1. Юзер зробив запит і чекає, поки він виконується (спіннер)
2. Юзер отримав відповідь - відмальувались юзери, які прийшли
3. Юзер отримав помилку - показали цю помилку

*/
