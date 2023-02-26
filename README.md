# E-Commerce-Back_End [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Description 📃

This application is a back end program that will allow you too easily sort through JSON data about a store front. It has all the products, with their corresponding tags and categories.

## Table of Contents

- [How to Install](#how-to-install🔌)
- [Usgae](#usage🔋)
- [Credits](#credits🙏🏻)
- [License](#license🔑)
- [Video How To](#video📺)

## How-to-Install🔌

GitHub Repo: [Connor812](https://github.com/Connor812/E-Commerce-Back-End.git)


## Usage🔋

How to use. You can either view the [how to video](https://drive.google.com/file/d/1IJXeQZLrCCHG2qUnbHnfZwnf9mcfJKSZ/view) or follow the instructions here. First you'll have to clone down [my repo](https://github.com/Connor812/E-Commerce-Back-End.git). Then once your in the root folder E-Commerce Back End, you'll have change the password in the connect folder in the [.env](./.env) file. Once changed, you'll be able to run  <span style="color:yellow">**mysql -u root -p**</span>, enter your password in and run the command source <span style="color:yellow">**./db/schema.sql;**</span>, then back in the command line run <span style="color:yellow">**node ./seeds/index.js;**</span>. Now that the data is seeded in the program, you can run <span style="color:yellow">**npm start**</span> to start the program. Now you can enter insomnia and import my [insomnia data](./assets/Insomnia-All_2023-02-25.json) inside the assets folder, and test out all the routes: 
- View All Products
- View Product By Id
- Create New Product
- Update Product
- Delete Product
- View All Categories
- View Category By Id
- Create New Category
- Update Category
- Delete Category
- View All Tags
- View Tag By Id
- Create New Tag
- Update Tag
- Delete Tag

## Credits🙏🏻

Shout out to the University of Toronto for helping me learn how to code this program.

## License🔑

[GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007](https://www.gnu.org/licenses)

## Video📺

[How to Video](https://drive.google.com/file/d/1IJXeQZLrCCHG2qUnbHnfZwnf9mcfJKSZ/view)