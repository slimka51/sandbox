import React from "react";
import { ArrowRight } from "../../components/ArrowRight";
import { Basket } from "../../components/Basket";
import { DesktopStatus } from "../../components/DesktopStatus";
import { Frame } from "../../components/Frame";
import "./style.css";

export const Home = (): JSX.Element => {
  return (
    <div className="home">
      <div className="div-2">
        <div className="overlap-5">
          <div className="text-wrapper-11">Крепежные колышки</div>
          <img
            className="group-6"
            alt="Group"
            src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/group-2365@2x.png"
          />
        </div>
        <div className="overlap-6">
          <div className="text-wrapper-12">Поиск товаров, категорий</div>
          <div className="rectangle" />
          <div className="group-7">
            <div className="group-8">
              <div className="overlap-group-2">
                <div className="text-wrapper-13">Каталог</div>
                <img
                  className="group-9"
                  alt="Group"
                  src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/group-4-1@2x.png"
                />
              </div>
            </div>
            <div className="group-10">
              <div className="text-wrapper-14">Войти</div>
              <div className="user-icon" />
            </div>
            <div className="group-11">
              <div className="text-wrapper-15">Корзина</div>
              <Basket
                basket="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/basket.svg"
                className="basket-instance"
              />
            </div>
            <div className="navbar">
              <div className="group-12">
                <div className="text-wrapper-16">АКЦИИ</div>
                <img
                  className="vector"
                  alt="Vector"
                  src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/vector.svg"
                />
              </div>
              <div className="text-wrapper-17">О КОМПАНИИ</div>
              <div className="text-wrapper-17">ПОКУПАТЕЛЯМ</div>
              <div className="text-wrapper-17">БЛОГ</div>
              <div className="text-wrapper-17">ВДОХНОВЕНИЕ</div>
              <div className="text-wrapper-18">КОНТАКТЫ</div>
            </div>
          </div>
          <div className="group-13">
            <img
              className="phone"
              alt="Phone"
              src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/phone@2x.png"
            />
            <div className="text-wrapper-19">+7 (495) 927-53-01</div>
            <div className="text-wrapper-20">Заказать обратный звонок</div>
            <div className="email" />
          </div>
          <img
            className="group-14"
            alt="Group"
            src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/group@2x.png"
          />
          <div className="group-15">
            <div className="overlap-7">
              <img
                className="search"
                alt="Search"
                src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/search@2x.png"
              />
              <div className="text-wrapper-21">Найти</div>
            </div>
          </div>
        </div>
        <div className="text-wrapper-22">Каталог продукции</div>
        <div className="text-wrapper-23">Популярные товары</div>
        <div className="text-wrapper-24">Вдохновение</div>
        <div className="overlap-8">
          <div className="email-2" />
          <div className="telephone">
            <div className="overlap-9">
              <img
                className="shape"
                alt="Shape"
                src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/shape-3.svg"
              />
              <img
                className="shape-2"
                alt="Shape"
                src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/shape-2.svg"
              />
              <img
                className="shape-3"
                alt="Shape"
                src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/shape-1.svg"
              />
            </div>
          </div>
          <div className="group-16">
            <div className="rectangle-2" />
            <DesktopStatus
              className="desktop-status-instance"
              divClassName="design-component-instance-node"
              divClassNameOverride="design-component-instance-node"
              ellipseClassName="design-component-instance-node"
              ellipseClassName1="design-component-instance-node"
              ellipseClassNameOverride="design-component-instance-node"
              style="black"
            />
          </div>
          <div className="group-17" />
          <div className="text-wrapper-25">Бордюры</div>
          <div className="text-wrapper-26">ГИБКИЕ ПЛАСТИКОВЫЕ</div>
          <p className="text-wrapper-27">для садовых и парковых дорожек, газонов и клумб</p>
          <div className="frame-2">
            <div className="text-wrapper-28">Подробнее</div>
          </div>
          <img
            className="element-4"
            alt="Element"
            src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/------3-1@2x.png"
          />
        </div>
        <div className="group-18">
          <div className="overlap-10">
            <div className="text-wrapper-29">+7 (495) 927-53-01</div>
            <div className="text-wrapper-30">info@mail.ru</div>
            <div className="text-wrapper-31">КАТАЛОГ</div>
            <div className="text-wrapper-32">© ГеоПластБорд, 2023</div>
            <div className="text-wrapper-33">Политика конфиденциальности</div>
            <div className="overlap-group-3">
              <div className="flexcontainer">
                <p className="text">
                  <span className="text-wrapper-34">
                    О компании
                    <br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper-34">
                    Блог
                    <br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper-34">
                    Акции
                    <br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper-34">Контакты</span>
                </p>
              </div>
              <div className="flexcontainer-2">
                <p className="text">
                  <span className="text-wrapper-34">
                    Частые вопросы
                    <br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper-34">
                    Доставка и оплата
                    <br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper-34">
                    Возврат и обмен
                    <br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper-34">
                    Сертификаты
                    <br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper-34">Гарантии</span>
                </p>
              </div>
            </div>
            <div className="text-wrapper-35">ПОКУПАТЕЛЯМ</div>
            <div className="text-wrapper-36">О КОМПАНИИ</div>
            <img
              className="group-19"
              alt="Group"
              src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/group-1.png"
            />
            <img
              className="you-tube"
              alt="You tube"
              src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/youtube@2x.png"
            />
            <p className="cetera-labs">
              Создание сайта — Cetera Labs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Поддержка сайта
            </p>
            <img
              className="VK"
              alt="Vk"
              src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/vk@2x.png"
            />
          </div>
        </div>
        <div className="overlap-11">
          <div className="text-wrapper-37">Цветники</div>
          <DesktopStatus
            className="desktop-status-2"
            divClassName="desktop-status-3"
            divClassNameOverride="desktop-status-3"
            ellipseClassName="desktop-status-3"
            ellipseClassName1="desktop-status-3"
            ellipseClassNameOverride="desktop-status-3"
            style="black"
          />
          <img
            className="group-20"
            alt="Group"
            src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/group-2380@2x.png"
          />
        </div>
        <div className="overlap-12">
          <div className="text-wrapper-38">Дорожки</div>
          <DesktopStatus
            className="desktop-status-4"
            divClassName="desktop-status-3"
            divClassNameOverride="desktop-status-3"
            ellipseClassName="desktop-status-3"
            ellipseClassName1="desktop-status-3"
            ellipseClassNameOverride="desktop-status-3"
            style="black"
          />
          <img
            className="group-21"
            alt="Group"
            src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/group-2380@2x.png"
          />
        </div>
        <div className="arrow-right-wrapper">
          <ArrowRight
            className="arrow-right-instance"
            union="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/union-7.svg"
          />
        </div>
        <div className="group-22">
          <div className="arrow-right-instance-wrapper">
            <ArrowRight
              className="arrow-right-3"
              union="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/union-6.svg"
              unionClassName="arrow-right-2"
            />
          </div>
          <div className="group-23">
            <ArrowRight
              className="arrow-right-3"
              union="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/union-5.svg"
              unionClassName="arrow-right-4"
            />
          </div>
        </div>
        <div className="group-24">
          <ArrowRight
            className="arrow-right-instance"
            union="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/union-4.svg"
            unionClassName="arrow-right-5"
          />
        </div>
        <div className="group-25">
          <div className="overlap-13">
            <div className="text-wrapper-39">Бордюры пластиковые</div>
            <img
              className="group-6"
              alt="Group"
              src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/group-2359@2x.png"
            />
          </div>
        </div>
        <div className="frame-3">
          <div className="overlap-14">
            <img
              className="frame-4"
              alt="Frame"
              src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/frame-1-14@2x.png"
            />
            <div className="steeplain-dn-h">Пластиковый бордюр ГеоПластБорд</div>
            <p className="element-5">45 мм, длина 1 м</p>
          </div>
          <div className="overlap-15">
            <div className="group-26" />
            <div className="group-27">
              <div className="overlap-group-4">
                <div className="group-28">
                  <div className="group-29">
                    <div className="group-30">
                      <p className="element-6">
                        <span className="text-wrapper-40">250 </span>
                        <span className="text-wrapper-41">руб </span>
                      </p>
                    </div>
                  </div>
                  <p className="element-7">
                    <span className="text-wrapper-42">200 руб</span>
                    <span className="text-wrapper-43">&nbsp;</span>
                  </p>
                </div>
                <div className="text-wrapper-44">дилерам</div>
              </div>
              <div className="text-wrapper-45">розница</div>
            </div>
          </div>
          <div className="frame-5">
            <div className="text-wrapper-46">В корзину</div>
          </div>
        </div>
        <div className="frame-6">
          <div className="overlap-14">
            <img
              className="frame-4"
              alt="Frame"
              src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/frame-1-13@2x.png"
            />
            <div className="steeplain-dn-h">
              Грядка оцинкованная
              <br />
              цвет шоколадно-корчиневый
            </div>
            <p className="element-8">0,8 х 3,0 м, высота 20 см</p>
          </div>
          <div className="overlap-15">
            <div className="group-26" />
            <div className="group-27">
              <div className="overlap-group-4">
                <div className="group-28">
                  <div className="group-29">
                    <div className="group-30">
                      <p className="element-6">
                        <span className="text-wrapper-40">250 </span>
                        <span className="text-wrapper-41">руб </span>
                      </p>
                    </div>
                  </div>
                  <p className="element-7">
                    <span className="text-wrapper-42">200 руб</span>
                    <span className="text-wrapper-43">&nbsp;</span>
                  </p>
                </div>
                <div className="text-wrapper-44">дилерам</div>
              </div>
              <div className="text-wrapper-45">розница</div>
            </div>
          </div>
          <div className="frame-5">
            <div className="text-wrapper-46">В корзину</div>
          </div>
        </div>
        <div className="group-31">
          <div className="text-wrapper-47">Распродажа</div>
          <div className="group-32">
            <div className="arrow-right-instance-wrapper">
              <ArrowRight
                className="arrow-right-3"
                union="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/union-6.svg"
                unionClassName="arrow-right-2"
              />
            </div>
            <div className="group-23">
              <ArrowRight
                className="arrow-right-3"
                union="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/union-5.svg"
                unionClassName="arrow-right-4"
              />
            </div>
          </div>
          <Frame
            className="frame-2386"
            divClassName="frame-2386-instance"
            elementClassName="text-wrapper-48"
            elementClassNameOverride="text-wrapper-48"
            spanClassName="text-wrapper-48"
            spanClassName1="text-wrapper-48"
            spanClassName2="text-wrapper-48"
            spanClassNameOverride="frame-instance"
          />
          <div className="frame-7">
            <div className="overlap-14">
              <img
                className="frame-4"
                alt="Frame"
                src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/frame-1-14@2x.png"
              />
              <div className="steeplain-dn-h">Пластиковый бордюр ГеоПластБорд</div>
              <p className="element-5">45 мм, длина 1 м</p>
              <div className="group-33">
                <div className="overlap-group-5">
                  <div className="text-wrapper-49">Акция</div>
                </div>
              </div>
            </div>
            <div className="overlap-16">
              <div className="group-26" />
              <div className="group-27">
                <div className="overlap-group-4">
                  <div className="group-28">
                    <div className="group-29">
                      <div className="group-30">
                        <p className="element-6">
                          <span className="text-wrapper-40">250 </span>
                          <span className="text-wrapper-41">руб </span>
                        </p>
                      </div>
                    </div>
                    <p className="element-7">
                      <span className="text-wrapper-42">200 руб</span>
                      <span className="text-wrapper-43">&nbsp;</span>
                    </p>
                  </div>
                  <div className="text-wrapper-44">дилерам</div>
                </div>
                <div className="text-wrapper-45">розница</div>
              </div>
              <div className="group-34">
                <div className="overlap-17">
                  <p className="element-9">
                    <span className="text-wrapper-50">270 руб</span>
                    <span className="text-wrapper-43">&nbsp;</span>
                  </p>
                  <img
                    className="line-2"
                    alt="Line"
                    src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/line-11-6.svg"
                  />
                </div>
              </div>
              <div className="group-35">
                <div className="overlap-17">
                  <p className="element-9">
                    <span className="text-wrapper-50">210 руб</span>
                    <span className="text-wrapper-43">&nbsp;</span>
                  </p>
                  <img
                    className="line-3"
                    alt="Line"
                    src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/line-11-5.svg"
                  />
                </div>
              </div>
            </div>
            <div className="frame-5">
              <div className="text-wrapper-46">В корзину</div>
            </div>
          </div>
          <div className="frame-8">
            <div className="overlap-14">
              <img
                className="frame-4"
                alt="Frame"
                src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/frame-1-13@2x.png"
              />
              <div className="steeplain-dn-h">
                Грядка оцинкованная
                <br />
                цвет шоколадно-корчиневый
              </div>
              <p className="element-8">0,8 х 3,0 м, высота 20 см</p>
              <div className="group-33">
                <div className="overlap-group-5">
                  <div className="text-wrapper-49">Акция</div>
                </div>
              </div>
            </div>
            <div className="overlap-18">
              <div className="group-26" />
              <div className="group-27">
                <div className="overlap-group-4">
                  <div className="group-28">
                    <div className="group-29">
                      <div className="group-30">
                        <p className="element-6">
                          <span className="text-wrapper-40">250 </span>
                          <span className="text-wrapper-41">руб </span>
                        </p>
                      </div>
                    </div>
                    <p className="element-7">
                      <span className="text-wrapper-42">200 руб</span>
                      <span className="text-wrapper-43">&nbsp;</span>
                    </p>
                  </div>
                  <div className="text-wrapper-44">дилерам</div>
                </div>
                <div className="text-wrapper-45">розница</div>
              </div>
              <div className="group-36">
                <div className="overlap-17">
                  <p className="element-9">
                    <span className="text-wrapper-50">270 руб</span>
                    <span className="text-wrapper-43">&nbsp;</span>
                  </p>
                  <img
                    className="line-4"
                    alt="Line"
                    src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/line-11-4.svg"
                  />
                </div>
              </div>
              <div className="group-37">
                <div className="overlap-17">
                  <p className="element-9">
                    <span className="text-wrapper-50">210 руб</span>
                    <span className="text-wrapper-43">&nbsp;</span>
                  </p>
                  <img
                    className="line-5"
                    alt="Line"
                    src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/line-11-3.svg"
                  />
                </div>
              </div>
            </div>
            <div className="frame-5">
              <div className="text-wrapper-46">В корзину</div>
            </div>
          </div>
          <div className="frame-9">
            <div className="overlap-14">
              <img
                className="frame-4"
                alt="Frame"
                src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/frame-1-9@2x.png"
              />
              <div className="steeplain-dn-h">Металлический бордюр</div>
              <div className="element-8">1200*80*70*1,5 компл.</div>
              <div className="group-33">
                <div className="overlap-group-5">
                  <div className="text-wrapper-49">Акция</div>
                </div>
              </div>
            </div>
            <div className="overlap-19">
              <div className="group-26" />
              <div className="group-27">
                <div className="overlap-group-4">
                  <div className="group-28">
                    <div className="group-29">
                      <div className="group-30">
                        <p className="element-6">
                          <span className="text-wrapper-40">615 </span>
                          <span className="text-wrapper-41">руб </span>
                        </p>
                      </div>
                    </div>
                    <p className="element-7">
                      <span className="text-wrapper-42">590 руб</span>
                      <span className="text-wrapper-43">&nbsp;</span>
                    </p>
                  </div>
                  <div className="text-wrapper-44">дилерам</div>
                </div>
                <div className="text-wrapper-45">розница</div>
              </div>
              <div className="group-38">
                <div className="overlap-17">
                  <p className="element-9">
                    <span className="text-wrapper-50">270 руб</span>
                    <span className="text-wrapper-43">&nbsp;</span>
                  </p>
                  <img
                    className="line-4"
                    alt="Line"
                    src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/line-11-4.svg"
                  />
                </div>
              </div>
              <div className="group-37">
                <div className="overlap-17">
                  <p className="element-9">
                    <span className="text-wrapper-50">210 руб</span>
                    <span className="text-wrapper-43">&nbsp;</span>
                  </p>
                  <img
                    className="line-6"
                    alt="Line"
                    src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/line-11-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="frame-5">
              <div className="text-wrapper-46">В корзину</div>
            </div>
          </div>
        </div>
        <div className="frame-10">
          <div className="overlap-14">
            <img
              className="frame-4"
              alt="Frame"
              src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/frame-1-9@2x.png"
            />
            <div className="steeplain-dn-h">Металлический бордюр</div>
            <div className="element-8">1200*80*70*1,5 компл.</div>
          </div>
          <div className="overlap-15">
            <div className="group-26" />
            <div className="group-27">
              <div className="overlap-group-4">
                <div className="group-28">
                  <div className="group-29">
                    <div className="group-30">
                      <p className="element-6">
                        <span className="text-wrapper-40">615 </span>
                        <span className="text-wrapper-41">руб </span>
                      </p>
                    </div>
                  </div>
                  <p className="element-7">
                    <span className="text-wrapper-42">590 руб</span>
                    <span className="text-wrapper-43">&nbsp;</span>
                  </p>
                </div>
                <div className="text-wrapper-44">дилерам</div>
              </div>
              <div className="text-wrapper-45">розница</div>
            </div>
          </div>
          <div className="frame-5">
            <div className="text-wrapper-46">В корзину</div>
          </div>
        </div>
        <div className="overlap-20">
          <div className="group-39">
            <div className="text-wrapper-47">Новинки</div>
            <div className="group-40">
              <div className="arrow-right-instance-wrapper">
                <ArrowRight
                  className="arrow-right-3"
                  union="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/union-1.svg"
                  unionClassName="arrow-right-2"
                />
              </div>
              <div className="group-23">
                <ArrowRight
                  className="arrow-right-3"
                  union="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/union.svg"
                  unionClassName="arrow-right-4"
                />
              </div>
            </div>
            <div className="frame-11">
              <div className="overlap-14">
                <img
                  className="frame-4"
                  alt="Frame"
                  src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/frame-1-14@2x.png"
                />
                <div className="steeplain-dn-h">Пластиковый бордюр ГеоПластБорд</div>
                <p className="element-5">45 мм, длина 1 м</p>
                <div className="group-33">
                  <div className="overlap-21">
                    <div className="text-wrapper-51">Новое</div>
                  </div>
                </div>
              </div>
              <div className="overlap-15">
                <div className="group-26" />
                <div className="group-27">
                  <div className="overlap-group-4">
                    <div className="group-28">
                      <div className="group-29">
                        <div className="group-30">
                          <p className="element-6">
                            <span className="text-wrapper-40">250 </span>
                            <span className="text-wrapper-41">руб </span>
                          </p>
                        </div>
                      </div>
                      <p className="element-7">
                        <span className="text-wrapper-42">200 руб</span>
                        <span className="text-wrapper-43">&nbsp;</span>
                      </p>
                    </div>
                    <div className="text-wrapper-44">дилерам</div>
                  </div>
                  <div className="text-wrapper-45">розница</div>
                </div>
              </div>
              <div className="frame-5">
                <div className="text-wrapper-46">В корзину</div>
              </div>
            </div>
            <div className="frame-12">
              <div className="overlap-14">
                <img
                  className="frame-4"
                  alt="Frame"
                  src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/frame-1-13@2x.png"
                />
                <div className="steeplain-dn-h">
                  Грядка оцинкованная
                  <br />
                  цвет шоколадно-корчиневый
                </div>
                <p className="element-8">0,8 х 3,0 м, высота 20 см</p>
              </div>
              <div className="overlap-15">
                <div className="group-26" />
                <div className="group-27">
                  <div className="overlap-group-4">
                    <div className="group-28">
                      <div className="group-29">
                        <div className="group-30">
                          <p className="element-6">
                            <span className="text-wrapper-40">250 </span>
                            <span className="text-wrapper-41">руб </span>
                          </p>
                        </div>
                      </div>
                      <p className="element-7">
                        <span className="text-wrapper-42">200 руб</span>
                        <span className="text-wrapper-43">&nbsp;</span>
                      </p>
                    </div>
                    <div className="text-wrapper-44">дилерам</div>
                  </div>
                  <div className="text-wrapper-45">розница</div>
                </div>
              </div>
              <div className="frame-5">
                <div className="text-wrapper-46">В корзину</div>
              </div>
            </div>
            <div className="frame-13">
              <div className="overlap-22">
                <img
                  className="frame-14"
                  alt="Frame"
                  src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/frame-1-5@2x.png"
                />
                <div className="group-33">
                  <div className="overlap-21">
                    <div className="text-wrapper-51">Новое</div>
                  </div>
                </div>
              </div>
              <div className="overlap-23">
                <div className="text-wrapper-52">Металлический бордюр</div>
                <div className="text-wrapper-53">1200*80*70*1,5 компл.</div>
              </div>
              <div className="overlap-15">
                <div className="group-26" />
                <div className="group-27">
                  <div className="overlap-group-4">
                    <div className="group-28">
                      <div className="group-29">
                        <div className="group-30">
                          <p className="element-6">
                            <span className="text-wrapper-40">615 </span>
                            <span className="text-wrapper-41">руб </span>
                          </p>
                        </div>
                      </div>
                      <p className="element-7">
                        <span className="text-wrapper-42">590 руб</span>
                        <span className="text-wrapper-43">&nbsp;</span>
                      </p>
                    </div>
                    <div className="text-wrapper-44">дилерам</div>
                  </div>
                  <div className="text-wrapper-45">розница</div>
                </div>
              </div>
              <div className="frame-5">
                <div className="text-wrapper-46">В корзину</div>
              </div>
            </div>
            <div className="overlap-24">
              <div className="frame-15">
                <div className="overlap-14">
                  <img
                    className="frame-4"
                    alt="Frame"
                    src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/frame-1-4@2x.png"
                  />
                  <p className="steeplain-2">
                    <span className="text-wrapper-48">
                      Грядка оцинкованная <br />
                    </span>
                    <span className="text-wrapper-54">
                      <br />
                    </span>
                  </p>
                  <p className="element-5">0,8 х 3,0 м, высота 20 см</p>
                </div>
                <div className="overlap-15">
                  <div className="group-26" />
                  <div className="group-27">
                    <div className="overlap-group-4">
                      <div className="group-28">
                        <div className="group-29">
                          <div className="group-30">
                            <p className="element-6">
                              <span className="text-wrapper-40">2 100 </span>
                              <span className="text-wrapper-41">руб </span>
                            </p>
                          </div>
                        </div>
                        <p className="element-7">
                          <span className="text-wrapper-42">1 100 руб</span>
                          <span className="text-wrapper-43">&nbsp;</span>
                        </p>
                      </div>
                      <div className="text-wrapper-44">дилерам</div>
                    </div>
                    <div className="text-wrapper-45">розница</div>
                  </div>
                </div>
                <div className="frame-5">
                  <div className="text-wrapper-46">В корзину</div>
                </div>
              </div>
              <div className="group-41">
                <div className="overlap-21">
                  <div className="text-wrapper-51">Новое</div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-42">
            <div className="overlap-21">
              <div className="text-wrapper-51">Новое</div>
            </div>
          </div>
        </div>
        <div className="frame-16">
          <div className="overlap-14">
            <img
              className="frame-4"
              alt="Frame"
              src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/frame-1-4@2x.png"
            />
            <p className="steeplain-2">
              <span className="text-wrapper-48">
                Грядка оцинкованная <br />
              </span>
              <span className="text-wrapper-54">
                <br />
              </span>
            </p>
            <p className="element-5">0,8 х 3,0 м, высота 20 см</p>
          </div>
          <div className="overlap-15">
            <div className="group-26" />
            <div className="group-27">
              <div className="overlap-group-4">
                <div className="group-28">
                  <div className="group-29">
                    <div className="group-30">
                      <p className="element-6">
                        <span className="text-wrapper-40">2 100 </span>
                        <span className="text-wrapper-41">руб </span>
                      </p>
                    </div>
                  </div>
                  <p className="element-7">
                    <span className="text-wrapper-42">1 100 руб</span>
                    <span className="text-wrapper-43">&nbsp;</span>
                  </p>
                </div>
                <div className="text-wrapper-44">дилерам</div>
              </div>
              <div className="text-wrapper-45">розница</div>
            </div>
          </div>
          <div className="frame-5">
            <div className="text-wrapper-46">В корзину</div>
          </div>
        </div>
        <div className="group-43">
          <div className="text-wrapper-47">Блог</div>
          <div className="text-wrapper-55">Все темы</div>
          <div className="group-44">
            <div className="overlap-group-6">
              <p className="text-wrapper-56">Какой газон быбрать для частного дома?</p>
              <div className="text-wrapper-57">24 апреля 2023</div>
            </div>
          </div>
          <div className="frame-17">
            <div className="frame-18" />
            <div className="text-wrapper-58">8 мая 2023</div>
            <p className="text-wrapper-59">Заголовок темы в одну или две строки написать тут</p>
            <p className="text-wrapper-60">
              Значение систем водоотведения в современном строительстве трудно переоценить. Для современного человека
              они стали немаловажной частью среды обитания.
            </p>
          </div>
          <div className="frame-19">
            <div className="frame-20" />
            <div className="text-wrapper-58">9 мая 2023</div>
            <p className="text-wrapper-59">Заголовок темы&nbsp;&nbsp;в одну или две строки написать тут</p>
            <p className="text-wrapper-60">
              Значение систем водоотведения в современном строительстве трудно переоценить. Для современного человека
              они стали немаловажной частью среды обитания.
            </p>
          </div>
        </div>
        <div className="group-45">
          <div className="overlap-13">
            <div className="text-wrapper-61">Бордюры металлические</div>
            <img
              className="group-6"
              alt="Group"
              src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/group-2360@2x.png"
            />
          </div>
        </div>
        <div className="group-46">
          <div className="overlap-13">
            <div className="text-wrapper-62">Газонная решетка</div>
            <img
              className="group-6"
              alt="Group"
              src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/group-2366@2x.png"
            />
          </div>
        </div>
        <div className="group-47">
          <div className="text-wrapper-63">Лотки водоотводные</div>
          <div className="rectangle-wrapper">
            <img
              className="rectangle-3"
              alt="Rectangle"
              src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/rectangle-6-1.svg"
            />
          </div>
        </div>
        <div className="group-48">
          <div className="overlap-13">
            <div className="text-wrapper-64">Декоративные заборы</div>
            <img
              className="group-6"
              alt="Group"
              src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/group-2367@2x.png"
            />
          </div>
        </div>
        <div className="group-49">
          <div className="text-wrapper-65">Грядки</div>
          <div className="rectangle-wrapper">
            <img
              className="rectangle-4"
              alt="Rectangle"
              src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/rectangle-6@2x.png"
            />
          </div>
        </div>
        <div className="group-50">
          <div className="overlap-13">
            <div className="text-wrapper-66">Заборная лента</div>
            <img
              className="group-6"
              alt="Group"
              src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/group-2368@2x.png"
            />
          </div>
        </div>
        <div className="overlap-25">
          <div className="group-51">
            <div className="text-wrapper-67">Удобрение фертика</div>
            <div className="group-52" />
          </div>
          <img
            className="image"
            alt="Image"
            src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/image-1@2x.png"
          />
        </div>
        <div className="group-53">
          <div className="overlap-13">
            <div className="text-wrapper-68">Форма для дорожек</div>
            <img
              className="group-6"
              alt="Group"
              src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/group-2369@2x.png"
            />
          </div>
        </div>
        <div className="group-54">
          <div className="overlap-13">
            <div className="text-wrapper-69">
              Мульчаграм <br />и орехнин
            </div>
            <img
              className="group-6"
              alt="Group"
              src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/group-2364@2x.png"
            />
          </div>
        </div>
        <div className="group-55">
          <div className="overlap-26">
            <div className="text-wrapper-69"> Вазоны и кашпо</div>
            <img
              className="group-6"
              alt="Group"
              src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/group-2370@2x.png"
            />
          </div>
        </div>
        <div className="group-56">
          <div className="text-wrapper-70">Весь каталог</div>
          <img
            className="chevron-right-copy"
            alt="Chevron right copy"
            src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/chevron-right-copy@2x.png"
          />
        </div>
        <div className="group-57">
          <div className="overlap-27">
            <img
              className="rectangle-5"
              alt="Rectangle"
              src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/rectangle-10.png"
            />
            <img
              className="element-10"
              alt="Element"
              src="https://generation-sessions.s3.amazonaws.com/649b8fb84906fa77b2a76b4fcce287a6/img/345-1@2x.png"
            />
            <div className="text-wrapper-71">
              Подписаться <br />
              на рассылку
            </div>
            <div className="frame-21">
              <div className="text-wrapper-72">Подписаться</div>
            </div>
            <div className="rectangle-6" />
            <div className="text-wrapper-73">Электронная почта</div>
          </div>
        </div>
      </div>
    </div>
  );
};
