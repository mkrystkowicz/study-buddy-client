import { rest } from 'msw';
import { db } from 'mocks/db';
import faker from 'faker';

export const notes = [
  rest.get('/notes', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ notes: db.note.getAll() }));
  }),
  rest.post('/notes', (req, res, ctx) => {
    if (req.body.title && req.body.content) {
      const newNote = {
        id: faker.datatype.uuid(),
        title: req.body.title,
        content: req.body.content,
      };

      db.note.create(newNote);

      return res(
        ctx.status(201),
        ctx.json({
          notes: newNote,
        })
      );
    }

    return res(
      ctx.status(404),
      ctx.json({
        error: 'Every note needs to contain title and content',
      })
    );
  }),

  rest.delete('/notes/:id', (req, res, ctx) => {
    if (req.params.id) {
      db.note.delete({
        where: {
          id: {
            equals: req.params.id,
          },
        },
      });

      return res(
        ctx.status(201),
        ctx.json({
          notes,
        })
      );
    }

    return res(
      ctx.status(404),
      ctx.json({
        error: 'Every note needs to contain title and content',
      })
    );
  }),
];
