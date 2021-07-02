import {BlogItemProps, ProjectItemProps} from '../types';

const isProjectItem = (item: BlogItemProps | ProjectItemProps): item is ProjectItemProps => {
  return (item as ProjectItemProps).backgroundImageUrl !== undefined;
};

export default isProjectItem;
