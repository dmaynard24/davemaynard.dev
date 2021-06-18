import {BlogItemProps} from '../components/BlogItem/BlogItem';
import {ProjectItemProps} from '../components/ProjectItem/ProjectItem';

const isProjectItem = (item: BlogItemProps | ProjectItemProps): item is ProjectItemProps => {
  return (item as ProjectItemProps).backgroundImageUrl !== undefined;
};

export default isProjectItem;
