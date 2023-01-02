/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');

module.exports = function CabinetAdmin({ orders, carousel, catalog }) {
  return (
    <Layout>
      <header className="header">
        <div className="header__content container">
          <div className="header__logo">
            <a href="/" className="header__link">
              <img src="img/logo.png" alt="Logo" className="header__img" />
              <span className="header__text">InTime</span>
            </a>
          </div>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#tableOrder" className="nav__link">
                <span className="nav__text-admin">Таблица заказов</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#changeCarousel" className="nav__link">
                <span className="nav__text-admin">Таблица карусели</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#changeCatalog" className="nav__link">
                <span className="nav__text-admin">Таблица каталога</span>
              </a>
            </li>
          </ul>
        </div>
      </header>
      <div className="admin">
        <div className="container">
          <div className="admin__hello">
            <span className="admin__text">Hello!</span>
            <img src="img/cat.gif" alt="cat" className="admin__img" />
          </div>
          <div className="admin__table" id="tableOrder">
            <h2 className="admin__title">Таблица заказов:</h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Имя клиента</th>
                  <th scope="col">Номер телефона</th>
                  <th scope="col">Почта</th>
                  <th scope="col">Ссылка на часы</th>
                  <th scope="col">Дата оформления заказа</th>
                  <th scope="col">Cтатус заказа</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((el, i) => (
                  <tr key={el.id}>
                    <th scope="row">{i + 1}</th>
                    <td>{el.dataValues.name}</td>
                    <td>{el.dataValues.email}</td>
                    <td>{el.dataValues.phone}</td>
                    <td>{el.dataValues.url}</td>
                    <td>
                      {new Date(el.dataValues.createdAt).toLocaleString()}
                    </td>
                    <td>{el.dataValues.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="admin__table" id="changeCarousel">
            <h2 className="admin__title">Таблица изменения карусели:</h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Название часов</th>
                  <th scope="col">Описание часов</th>
                  <th scope="col">URL картинки</th>
                  <th scope="col"> </th>
                </tr>
              </thead>
              <tbody>
                {carousel.map((el, i) => (
                  <tr key={el.id}>
                    <th scope="row">{i + 1}</th>
                    <td>{el.dataValues.title}</td>
                    <td>{el.dataValues.note}</td>
                    <td className="admin__font-size">
                      {el.dataValues.imagePath}
                    </td>
                    <td>
                      <button type="button" className="admin__delete">
                        <img src="img/x.svg" alt="delete" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="" id="Order">
              <form
                method="POST"
                className="admin__form"
                action="cabinetCarousel"
              >
                <span className="admin__form-text">Изменить карусель</span>
                <input
                  className="nameClient form-control admin__input"
                  type="text"
                  placeholder="Название часов"
                  name="title"
                  required
                />
                <input
                  className="emailClient form-control admin__input"
                  type="text"
                  placeholder="Описание часов"
                  name="note"
                  required
                />
                <input
                  className="phoneClient form-control admin__input"
                  type="text"
                  placeholder="URL картинки"
                  name="imagePath"
                  required
                />
                <button type="submit" className="btn">
                  Добавить
                </button>
              </form>
            </div>
          </div>
          <div className="admin__table" id="changeCatalog">
            <h2 className="admin__title">Таблица изменения каталога:</h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Название часов</th>
                  <th scope="col">URL картинки</th>
                  <th scope="col"> </th>
                </tr>
              </thead>
              <tbody>
                {catalog.map((el, i) => (
                  <tr key={el.id}>
                    <th scope="row">{i + 1}</th>
                    <td>{el.dataValues.titleWatch}</td>
                    <td>{el.dataValues.urlWatch}</td>
                    <td>
                      <button type="button" className="admin__delete">
                        <img src="img/x.svg" alt="delete" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="" id="Order1">
              <form method="POST" className="admin__form">
                <span className="admin__form-text">Изменить каталог</span>
                <input
                  className="nameClient form-control admin__input"
                  type="text"
                  placeholder="Название часов"
                  name="titleWatch"
                  required
                />
                <input
                  className="phoneClient form-control admin__input"
                  type="text"
                  placeholder="URL картинки"
                  name="urlWatch"
                  required
                />
                <button type="submit" className="btn">
                  Добавить
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};