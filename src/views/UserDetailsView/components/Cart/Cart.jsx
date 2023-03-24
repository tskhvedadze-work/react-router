export function Cart({ user_id }) {
  // todo  ამ ენდპოინტიდან უნდა წამოიღოთ user_id
  // ის მიხედვით პროდუქტები და აჩვენოთ ქვემოთ
  // https://dummyjson.com/carts/user/5

  return (
    <div>
      <h1>User Cart</h1>
      {user_id}
    </div>
  );
}
