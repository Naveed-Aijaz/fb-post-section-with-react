import "./footer.scss"



function Footer() {
    const footerSocialLinks = [

        {
            link: "",
            icon: sd,

        },

        {
            link: "",
            icon: S,
        },


        {
            link: "",
            icon: S,
        },


        {
            link: "",
            icon: S,
        }
    ]

    const footerLinks = [
        {
            title: "Home",
            links: [
                {
                    link: "",
                    label: "About US"
                },

                {
                    link: "",
                    label: "Vision"
                }, {
                    link: "",
                    label: "Support"
                }, {
                    link: "",
                    label: "Our Mission"
                },

            ]
        },

        {
            title: "Products",
            link: [
                {
                    link: "sdasd",
                    label: "Privacy Policy",
                },

                {
                    link: "sdasd",
                    label: "Term & Conditions",
                },

                {
                    link: "sdasd",
                    label: "Refund Policy",
                },

                {
                    link: "sdasd",
                    label: "FAQ",
                },
            ]
        },


        {
            title: "Contact Us",
            link: [
                {
                    link: "sdasd",
                    label: "Email",
                },

                {
                    link: "sdasd",
                    label: "Phone",
                },

                {
                    link: "sdasd",
                    label: "WhatsApp",
                },


            ],
        },

    ]

    return (
        <div className="fisrt-col">
            <h3>Footer Logo</h3>
            <p>
                Ready to explore the possibilities? Dive deeper into our products, learn about our visionary team, or check out our latest blogs for insights into the world of AI and mobile technology. We invite you to be part of the future - explore, innovate, and transform with EAIsoft.
            </p>
            <a href="https://technetcloud.co">EAIsoft Ltd, 7 Bell Yard, London, WC2A 2JR</a>
            <div className="social-link">
                {footerSocialLinks.map((item) => {
                    return (
                        <a href={item.link} target="_blank">{item.icon}</a>
                    )
                }
                )}
            </div>
        </div>
 
    )
}