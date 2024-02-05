import { AnimationClip }        from 'three'
import { Mesh }                 from 'three'
import { MeshStandardMaterial } from 'three'
import { GLTF }                 from 'three-stdlib'

export type ModelProps = JSX.IntrinsicElements['group']

export interface GLTFAction extends AnimationClip {
  name: 'a'
}

export interface GLTFResult extends GLTF {
  nodes: {
    Sphere001: Mesh
    Sphere002: Mesh
  }
  materials: {
    ['Material.003']: MeshStandardMaterial
  }
  animations: GLTFAction[]
}
