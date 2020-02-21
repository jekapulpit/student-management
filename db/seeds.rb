#specs

isit = Spec.create(name: 'ISIT')
poit = Spec.create(name: 'POIT')
deivi = Spec.create(name: 'DEIVI')

#faculties

faculties_attributes = [
    { name: 'FIT', specs: [
        isit,
        poit,
        deivi
    ] },
    { name: 'HTIT' },
    { name: 'LES' },
]

faculties_attributes.each do |faculty_attributes|
  Faculty.create(faculty_attributes)
end

#contacts
first_contact = Contact.create({
                                   email: 'example1@mail.ru',
                                   phone_number: '121123123',
                                   address: 'example1 address 1'
                               })

second_contact = Contact.create({
                                    email: 'example2@mail.ru',
                                    phone_number: '121223123',
                                    address: 'example1 address 3'
                               })

third_contact = Contact.create({
                                   email: 'example1@mail.ru',
                                   phone_number: '123123123',
                                   address: 'example1 address 23'
                               })

#profiles

first_profile = Profile.create({
                                   first_name: 'Yauhen',
                                   last_name: 'Dubovik',
                                   date_of_birth: Date.parse('Jan 31 1999'),
                                   contact: first_contact
                               })

second_profile = Profile.create({
                                    first_name: 'Artem',
                                    last_name: 'Krishtopchik',
                                    date_of_birth: Date.parse('Jan 31 1999'),
                                    contact: second_contact
                                })

third_profile = Profile.create({
                                   first_name: 'Daniil',
                                   last_name: 'Chernishev',
                                   date_of_birth: Date.parse('Jan 31 1999'),
                                   contact: third_contact
                               })

#roles

student_role = Role.create({ role: :student })
admin_role = Role.create({ role: :admin })
teacher_role = Role.create({ role: :teacher })

#users

zheka = User.create({
    username: 'fcbb99',
    role: student_role,
    profile: first_profile
            })

artem = User.create({
                username: 'artemklass',
                role: student_role,
                profile: second_profile
            })

danik = User.create({
                username: 'daniilklass',
                role: student_role,
                profile: third_profile
            })

#education

EducationProcess.create({
                            user: zheka,
                            spec: isit,
                            start_time: Date.parse('Jan 31 2016'),
                            end_time: Date.parse('Jan 31 2020'),
                        })

EducationProcess.create({
                            user: artem,
                            spec: isit,
                            start_time: Date.parse('Jan 31 2016'),
                            end_time: Date.parse('Jan 31 2020'),
                        })

EducationProcess.create({
                            user: danik,
                            spec: isit,
                            start_time: Date.parse('Jan 31 2016'),
                            end_time: Date.parse('Jan 31 2020'),
                        })

#companies
tehart = Company.create({
                            name: 'iTechArt Group',
                            contact: Contact.create({
                                                        email: 'example1@mail.ru',
                                                        phone_number: '121123123',
                                                        address: 'example1 address 1'
                                                    })
                        })

companies_attributes = [
    { name: 'LeverX', contact: Contact.create({
        email: 'example2@mail.ru',
        phone_number: '123123113',
        address: 'example32 address 2'
    }) },
    { name: 'LOH', contact: Contact.create({
        email: 'example3@mail.ru',
        phone_number: '123121123',
        address: 'example23 address 3'
    }) },
]

companies_attributes.each do |company_attributes|
  Company.create(company_attributes)
end

#events
Event.create({
                 user: zheka,
                 event_type: :interview,
                 description: 'some event description',
                 company: tehart,
                 event_time: Date.parse('Jan 31 2020')
             })

Event.create({
                 user: artem,
                 event_type: :interview,
                 description: 'some event description',
                 company: tehart,
                 event_time: Date.parse('Jan 31 2020')
             })

Event.create({
                 user: danik,
                 event_type: :interview,
                 description: 'some event description',
                 company: tehart,
                 event_time: Date.parse('Jan 31 2020')
             })

Event.create({
                 user: zheka,
                 event_type: :interview,
                 description: 'some event description',
                 company: tehart,
                 event_time: Date.parse('Jan 30 2020')
             })

