import React from 'react';
import styled from 'styled-components';
import SkeletonElement from './Skeleton';

const SkeletonWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const GallerySkeleton = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem 3%;
`;

const SkeletonGallery = () => {
  return (
    <SkeletonWrapper>
      <GallerySkeleton>
        <SkeletonElement type="item" />
        <SkeletonElement type="item" />
        <SkeletonElement type="item" />
        <SkeletonElement type="item" />
        <SkeletonElement type="item" />
        <SkeletonElement type="item" />
      </GallerySkeleton>
    </SkeletonWrapper>
  );
};

export default SkeletonGallery;
