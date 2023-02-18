import { TagButton } from "./styles";

export function Tags({tags, ...rest}) {
  return (
    <div>
      {tags && tags.map((tag) => (
        <TagButton key={tag}>
          {tag}
        </TagButton>
      ))}
    </div>
  );
}