import React from 'react'
import Mail from '../buttons/mail'
import Icon from '../../assets/logo.png'

export default function navBar() {
    return (
        <div name="menu" class="flex justify-between bg-gradient-to-t from-primary to-secondary w-screen" >
            <div className="flex h-40 p-8 text-fourth ">
                <img className="h-20" src={Icon} alt="" />
            </div>
            <div class="flex flex-row p-8 py-10">
                <div className="px-2 my-4 text-fourth text-lg hover:text-third">Projects</div>
                <Mail />
                <div className="px-2 my-4 text-fourth text-lg hover:text-third">About me</div>
            </div>
        </div>
    )
}
