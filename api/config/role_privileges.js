module.exports = {
    privGroups: [
        
    {
            id: "USERS",
            name: "User Permissions"
        },
    {
            id: "ROLES",
            name: "Role Permissions"
        },
    {
            id: "CATEGORIES",
            name: "Category Permissions"
        },
    {
            id: "AUDITLOGS",
            name: "AuditLogs Permissions"
        }
    ],

    privileges : [
        {
            key: "user_view",
            name:"User View",
            group: "USERS",
            description: "User view"

        },
        {
            key: "user_add",
            name:"User add",
            group: "USERS",
            description: "User add"

        },
        {
            key: "user_update",
            name:"User Update",
            group: "USERS",
            description: "User update"

        },
        {
            key: "user_delete",
            name:"User delete",
            group: "USERS",
            description: "User delete"

        },
         {
            key: "roles_view",
            name:"Roles View",
            group: "ROLES",
            description: "Roles view"

        },
        {
            key: "roles_add",
            name:"Roles add",
            group: "ROLES",
            description: "Role add"

        },
        {
            key: "role_update",
            name:"Role Update",
            group: "ROLES",
            description: "Role update"

        },
        {
            key: "role_delete",
            name:"Role delete",
            group: "ROLES",
            description: "Roles delete"

        },
         {
            key: "category_view",
            name:"Category View",
            group: "CATEGORIES",
            description: "Category view"

        },
        {
            key: "category_add",
            name:"Category add",
            group: "CATEGORIES",
            description: "Category add"

        },
        {
            key: "category_update",
            name:"Category Update",
            group: "CATEGORIES",
            description: "Category update"

        },
        {
            key: "category_delete",
            name:"Category delete",
            group: "CATEGORIES",
            description: "Category delete"

        },
             {
            key: "auditlogs_view",
            name:"AuditLogs View",
            group: "AUDITLOGS",
            description: "AuditLogs view"

        },
        {
            key: "auditlogs_add",
            name:"AuditLogs add",
            group: "AUDITLOGS",
            description: "AuditLogs add"

        },
        {
            key: "auditlogs_update",
            name:"AuditLogs Update",
            group: "AUDITLOGS",
            description: "AuditLogs update"

        },
        {
            key: "auditlogs_delete",
            name:"AuditLogs delete",
            group: "AUDITLOGS",
            description: "auditlogs delete"

        },
        
    ]
}
