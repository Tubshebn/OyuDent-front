import { _mock } from "./_mock";

// ----------------------------------------------------------------------

export const _members = [...Array(8)].map((_, index) => ({
  id: _mock.id(index),
  role: _mock.role(index),
  name: _mock.fullName(index),
  photo: `/assets/images/portrait/portrait_${index + 1}.svg`,
}));
