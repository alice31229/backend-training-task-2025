const { EntitySchema } = require('typeorm')

module.exports = new EntitySchema({
  name: 'Course',
  tableName: 'COURSE',
  columns: {
    id: {
      primary: true,
      type: 'uuid',
      generated: 'uuid',
      nullable: false
    },
    user_id: {
        type: 'uuid',
        nullable: false
    },
    skill_id: {
        type: 'uuid',
        nullable: false
    },
    name: {
      type: 'varchar',
      length: 100,
      nullable: false
    },
    description: {
      type: 'text',
      nullable: false
    },
    startAt: {
      type: 'timestamp',
      name: 'start_at',
      nullable: false
    },
    endAt: {
        type: 'timestamp',
        name: 'end_at',
        nullable: false
    },
    maxParticipants: {
        type: 'integer',
        name: 'max_participants',
        nullable: false
    },
    meetingUrl: {
        type: 'varchar',
        length: 2048,
        name: 'meeting_url',
        nullable: false
    },
    createdAt: {
        type: 'timestamp',
        createDate: true,
        name: 'created_at',
        nullable: false
    },
    updatedAt: {
        type: 'timestamp',
        name: 'updated_at',
        nullable: false
    }
  }
})
