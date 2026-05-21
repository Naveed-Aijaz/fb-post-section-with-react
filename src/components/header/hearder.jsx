import "./header.scss"


export const Header = () => {
    const headerData = [
        {
            link: "dfs",
            label: "Home",
        },


        {
            link: "sdfsdf",
            label: "About",

        },

        {
            link: "",
            label: "Contact",

        },

        {
            link: "sdsd",
            label: "Gallary",

        },

        {
            link: "sadasd",
            label: "Vision",

        },


    ]


    return (
        <div className="header">

            <h2>Logo</h2>
            <ul>
                {headerData.map((item) => {
                    return (
                        <li>
                            <a href={item.link} target="_blank">{item.label}</a>
                        </li>
                    )



                })}
            </ul>

        </div>
    )




}