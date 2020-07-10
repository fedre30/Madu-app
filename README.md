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


#### Why React Native?
- React Native is	React Native isn't necessary better than standard Native development. But React Native's main advantage compared to Native is enabling single JavaScript codebase for 2 different platforms. Furthermore, not only is it easier to maintain the app for both platforms, but also it requires less resources.

#### Why Native-base?
- Native-base gives you the potential of building applications that run on iOS and Android using a single codebase. It eases out your development. Since NativeBase is built on top of React Native, hence with any component you can pass the style property which will be merged to the default style of that component.

#### Why React-native-maps?
- React-native-maps is Having accurate information about your users’ location is a great way to enhance the user experience. For example, you could use this data to show users what is around them, offer exclusive deals for products and services in their area, and much more. Fortunately, if you have a React application, implementing maps is a breeze using the react-native-maps library.

#### Why Google maps API?
- Google maps API is a robust tool that can be used to create a custom map, a searchable map, check-in functions, display live data synching with location, plan routes, or create a mashup just to name a few.

#### Why React-native-geocoding?
- React-native-geocoding module for React Native to transform a description of a location (i.e. street address, town name, etc.) into geographic coordinates (i.e. latitude and longitude) and vice versa. This module uses Google Maps Geocoding API and requires an API key for purposes of quota management. It saves a considerable amount of time to create a localisation.

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

        `{
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

- DetailSecureLogin 

        `{
            token*	string($uuid)
        }`

- DetailProcessRegister 

        `{
            application*	string
            maxLength: 200

            instance*	string
            maxLength: 200

            token*	string($uuid)
        }`

- DetailList 

        `{
            titre	string
            maxLength: 250

            name	string
            maxLength: 250

            day_duration	integer
            maximum: 2147483647
            minimum: -2147483648

            description*	string

            done_by_users	[...]

            small_description	string
            maxLength: 250

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

            done_by_users_uid	[...]
            
        }`

- DetailUser 

        `{
            email	string($email)
            maxLength: 254

            first_name	string
            maxLength: 250

            last_name	string
            maxLength: 250

            current_leaves	integer
            maximum: 2147483647
            minimum: -2147483648

            total_leaves	integer
            maximum: 2147483647
            minimum: -2147483648

            eco_points	string
            maxLength: 250

            company*	DetailCompany{...}Jump to definition

            current_challenges*	[...]

            unlocked_rewards*	[...]

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

            defaultdividers	[...]

            admin	boolean
            readOnly: true

            is_staff	boolean
            readOnly: true
            Designates whether the user can log into this admin site.

            level*	string

            unsubscribe_notification_url	string
            readOnly: true

            unsubscribe_all	boolean

            unsubscribe_to	[...]

            external_auth	boolean

            company_uid	string
            nullable: true

            current_challenges_uid	[...]

            unlocked_rewards_uid	[...] 

        }`

- ListUser 

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

- DetailGroup 

        `{
            name	string

            maxLength: 250

            members*	[...]

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

            members_uid*	[...]
 
        }`

- ListGroup 

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

- DetailTypeOfShop 

        `{

            name	string
            maxLength: 250

            criterias	[...]

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

            criterias_uid*	[...]
 
        }`

- DetailShop

        `{

            name	string
            maxLength: 250

            tags*	[...]

            type*	DetailTypeOfShop{...}Jump to definition

            address	string
            maxLength: 250

            zipcode	string
            maxLength: 250

            city	string
            maxLength: 250

            accessibility*	boolean

            description	string
            maxLength: 250

            range_price	integer
            maximum: 2147483647
            minimum: -2147483648
            ratings	integer
            maximum: 2147483647
            minimum: -2147483648

            greenscore	{...}

            website	string
            maxLength: 250

            flux	{...}

            image	string
            nullable: true

            hours	string
            maxLength: 250

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

            tags_uid	[...]

            type_uid*	string
            
        }`

- ListShop 

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

- ListTypeOfShop

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

- DetailGreenscoreCriteria 

        `{
            name	string
            maxLength: 250

            parent_criteria	string
            readOnly: true

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

            parent_criteria_uid	string
            nullable: true
            
        }`
    
- ListGreenscoreCriteria
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

- DetailReward

        `{
            type	string
            maxLength: 250

            name	string
            maxLength: 250

            description	string

            image	string
            nullable: true

            video_source	string
            maxLength: 250

            leaves_amount	integer
            maximum: 2147483647
            minimum: -2147483648

            subtitle	string

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
            
        }`

- ListReward 

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

- DetailRating

        `{

            value*	boolean
            user*	DetailUser{Jump to definition
            email	string($email)
            maxLength: 254
            first_name	string
            maxLength: 250
            last_name	string
            maxLength: 250
            current_leaves	integer
            maximum: 2147483647
            minimum: -2147483648
            total_leaves	integer
            maximum: 2147483647
            minimum: -2147483648
            eco_points	string
            maxLength: 250
            company*	DetailCompany{...}Jump to definition
            current_challenges*	[...]
            unlocked_rewards*	[...]
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
            defaultdividers	[...]
            admin	boolean
            readOnly: true
            is_staff	boolean
            readOnly: true
            Designates whether the user can log into this admin site.

            level*	string
            unsubscribe_notification_url	string
            readOnly: true
            unsubscribe_all	boolean
            unsubscribe_to	[...]
            external_auth	boolean
            company_uid	string
            nullable: true
            current_challenges_uid	[...]
            unlocked_rewards_uid	[...]
            
            }
            shop*	DetailShop{Jump to definition
            name	string
            maxLength: 250
            tags*	[...]
            type*	DetailTypeOfShop{...}Jump to definition
            address	string
            maxLength: 250
            zipcode	string
            maxLength: 250
            city	string
            maxLength: 250
            accessibility*	boolean
            description	string
            maxLength: 250
            range_price	integer
            maximum: 2147483647
            minimum: -2147483648
            ratings	integer
            maximum: 2147483647
            minimum: -2147483648
            greenscore	{...}
            website	string
            maxLength: 250
            flux	{...}
            image	string
            nullable: true
            hours	string
            maxLength: 250
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
            tags_uid	[...]
            type_uid*	string
            
            }
            comment	string
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
            user_uid*	string
            shop_uid*	string
 
        }`

- ListRating 

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

- DetailUserDisagreement 

        `{
            shop*	DetailShop{...}Jump to definition

            is_eco*	boolean

            tags*	[...]

            user*	DetailUser{...}Jump to definition

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

            shop_uid*	string

            tags_uid*	[...]

            user_uid*	string
            
        }`

- ListUserDisagreement

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

- DetailTag 

        `{
            name	string
            maxLength: 250

            image	string
            nullable: true

            is_main_tag*	boolean

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
            
        }`

- ListTag

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

- DetailChallenge 

        `{
            titre	string
            maxLength: 250

            name	string
            maxLength: 250

            day_duration	integer
            maximum: 2147483647
            minimum: -2147483648

            description*	string

            done_by_users*	[...]

            small_description	string
            maxLength: 250

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

            done_by_users_uid	[...]
 
        }`

- ListChallenge 

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

- DetailNewAddress 

        `{
            name	string
            maxLength: 250

            address	string
            maxLength: 250

            zipcode	string
            maxLength: 250

            city	string
            maxLength: 250

            is_eco*	boolean

            related_user*	DetailUser{...}Jump to definition

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

            related_user_uid*	string
            
        }`

- ListNewAddress 

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

- DetailEmail 

        `{
            subject	string
            maxLength: 250

            resource_status	{...}

            resource_message	string
            readOnly: true

            body	string

            receiver*	DetailUser{...}Jump to definition
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

            receiver_uid*	string
            
        }`

- ListEmail 

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

- DetailConcreteRole

        `{

            uid	string($uuid)
            readOnly: true

            name*	string
            maxLength: 255

            users_uid	[...]
            
            url	string
            readOnly: true

            created_by	string
            readOnly: true

            creation_date	string($date-time)
            readOnly: true

            modification_date	string($date-time)
            readOnly: true
            
        }`

- ListConcreteRole 

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

- DetailConcretePermission 

        `{
            uid	string($uuid)
            readOnly: true

            model_name*	string
            maxLength: 255

            create_roles	[...]

            update_roles	[...]

            retrieve_roles	[...]

            delete_roles	[...]

            create_roles_uid	[...]

            update_roles_uid	[...]

            retrieve_roles_uid	[...]

            delete_roles_uid	[...]

            url	string
            readOnly: true
 
        }`

- ListConcretePermission 

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


	






