import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const ItemNavbarContainer = () => {
  return (
    <Container>
      <div className="container-lg">
        <div className="brand">
          <p>MiSalud</p>
          <svg data-name="Layer 1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11,12v1H10a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0V15h1a1,1,0,0,0,0-2H13V12a1,1,0,0,0-2,0Zm10.66406-1.74756-9-8a.99893.99893,0,0,0-1.32812,0l-9,8a.99991.99991,0,0,0,1.32812,1.49512L4,11.449V21a.99974.99974,0,0,0,1,1H19a.99974.99974,0,0,0,1-1V11.449l.33594.29859a.99991.99991,0,0,0,1.32812-1.49512ZM18,20H6V9.6712l6-5.33331L18,9.6712Z" fill="#6563ff"/></svg>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to='/'>Inicio</NavLink>
            </li>
            <li>
              <NavLink to='/alert'>Alerta</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  )
}

export default ItemNavbarContainer

const Container = styled.header`
  width: 100%;
  height: 50px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 0 14px;
  box-sizing: border-box;
  .container-lg{
    width: 100%;
    max-width: 1000px;
    margin: auto;
    display: flex;
    justify-content: space-between; 
    align-items: stretch;
    height: 100%;

    .brand{
      display: flex;
      justify-content: center; 
      align-items: center;
      svg{
        width: 24px;
        height: 24px;
        margin-left: 7px;
      }
      p{
        font-size: 21px;
      }
    }

    nav{
      height: 100%;
      ul{
        height: 100%;
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 14px;
        li{
          a{
            text-decoration: none;
            color: #000;
            font-size: 18.2px;

            &:hover{
              color: #6150FF;
              text-decoration: underline;
            }

            &.active{
              color: #6150FF;
            }
          }
        }
      }
    }
  }
`