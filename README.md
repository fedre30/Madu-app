# Madu App 🍃

🍃 Welcome to Hetic W3 final project ! 🥕

## Concept 🧐
Madu is a Mobile app that lists on a map all eco-friendly adresses such as shops, resturants etc., in order to create more ethical and engaged consumers.

## Features
* Map of Shops
* List of shops and filters
* Profile
* "Cagnotte" (Points and awards)
* Défis

## Stack choices 📦
### Libraries 📕
* [Native-base](https://nativebase.io)
* [React-native-maps](https://github.com/react-native-community/react-native-maps)
* [Google maps API](https://developers.google.com/maps/documentation)
* [React-native-geocoding](https://github.com/marlove/react-native-geocoding)


Why React Native?
React Native is ...

Why Native-base?
Native-base is ...

Why React-native-maps?
React-native-maps is ...

Why Google maps API?
Google maps API is ...

Why React-native-geocoding?
React-native-geocoding is ...

## Team 👩🏻‍💻 👨🏻‍💻
- Quentin Aimé (Frontend Developer)
- Federica Alfano (Frontend Developer)
- Mélanie Da Costa (Frontend Developer)
- Mathieu Gelbon (Frontend Developer)
- Joel Pokam (Frontend Developer)

Link 🐼
https://exp.host/@fedre30/madu-app

## Login credentials 🔑
username: chrystal.leliegard@madu.net

password: madu

## Project setup 🚀

### Install expo (If not installed yet)
```npm install expo-cli --global```

### Install deps

```yarn install```

### Run project
```expo start```

## BDD 🧐

### Structure

- DetailCompany

    ` {
            name	string
            maxLength: 250

            address	string
            maxLength: 250
            
            zipcode	string
            maxLength: 250

            city	string
            maxLength: 250

            size	string
            maxLength: 250

            type	string
            maxLength: 250

            mail_affix	string
            maxLength: 250

            bundle_start_date*	string($date)

            bundle_end_date*	string($date)

            show_other_companies*	boolean

            total_user	integer

            maximum: 21474836477

            minimum: -2147483648

            uid	string($uuid)

            modification_date	string($date-time)

            readOnly: true

            creation_date	string($date-time)

            readOnly: true

            public	boolean
            url	string

            readOnly: true
            verbose_name	string

            readOnly: true
            created_by	string

            readOnly: true
            can_admin_users	[...]

            can_view_users	[...]

            can_admin_groups	[...]

            can_view_groups	[...]

            scopes	string
            readOnly: true
}
`

        - ListCompany 
        `{
            objects_count	integer

            next	string

            previous	string

            objects_count_per_page	integer

            num_total_pages	integer

            num_current_page	integer

            max_allowed_objects_per_page	integer

            model_name	string

            model_verbose_name	string

            list_display	[...]

            list_filter	[...]
            total_objects_count	integer

            create_url	string

            results	[...]
        }`

       - DetailLDAPAuthLogin
        ` {
            username*	string

            password*	string
        }`

        - DetailTwoFactorLogin
        `{
            email*	string($email)

            token*	string

            verification_code*	string
        }`

        - DetailAuthLogin
        
        `{
            email*	string($email)

            password*	string          
        }`

        - DetailRegister

        `{
            email*	string($email)

            password1	string
            nullable: true

            password2	string
            nullable: true

            email_format	string
            nullable: true

            url_format	string
            nullable: true
            default: /#/set-password/{token}/{email}/
        }`
        - DetailChangePassword

        `{

            email*	string($email)

            password1*	string

            password2*	string

            password_change_token	string($uuid)
            
        }`

        - DetailResetPassword
        `{
            email*	string($email)

            url_format	string
            nullable: true
            default: /#/reset-password/{token}/{email}/
            
        }`



## API 🧐

### Définition
An API is used to make the data or functionality of an existing application available for use by other applications. Here is who should make the notion of application programming interface clearer 😊

### Routes

#### PET

- POST

`/pet`
Add a new pet to the store
Exemple object model
  `{
  "id": 0,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}`

-Responses 
`405 	Invalid input`

`/pet/{petId}`
Updates a pet in the store with form data

- GET 

`/pet/findByStatus`

Finds Pets by status

Multiple status values can be provided with comma separated strings

-Responses 
`200 successful operation`

`400 Invalid status value`

`/pet/{petId}`


-Responses 
`200 successful operation`

`400 	Invalid ID supplied`

`404 Pet not found` 	




- PUT

`/pet`

Update an existing pet
Pet object that needs to be added to the store

`{
  "id": 0,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}`

-Responses 

`400 Invalid ID supplied`

`404 Pet not found`

`405 Validation exception`



- DELETE

`/pet/{petId}`

Deletes a pet

-Responses 

`400 Invalid ID supplied`

`404 Pet not found`


#### STORE 

- POST

`/store/inventory`

Place an order for a pet
order placed for purchasing the pet
Example Model

`{
  "id": 0,
  "petId": 0,
  "quantity": 0,
  "shipDate": "2020-07-09T12:00:42.460Z",
  "status": "placed",
  "complete": false
}`

-Responses 

`200 	Succesfull operation`

exemple

`{
  "id": 0,
  "petId": 0,
  "quantity": 0,
  "shipDate": "2020-07-09T12:36:48.492Z",
  "status": "placed",
  "complete": false
}`

`400  Invalid Order`

- GET

- DELETE

`/store/order/{orderId}`

Delete purchase order by ID

-Responses 

`400 	Invalid ID supplied`

`404 	Order not found`


	






