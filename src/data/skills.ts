import type { SkillCategory } from '@/types'

export const skillCategories: SkillCategory[] = [
  {
    name: 'Production & AV',
    icon: 'projector',
    skills: [
      { name: 'Projection Mapping', level: 92 },
      { name: 'LED Systems', level: 88 },
      { name: 'Video Switching', level: 90 },
      { name: 'Live Sound Engineering', level: 90 },
      { name: 'DMX / MIDI / OSC', level: 85 },
      { name: 'Signal Routing', level: 88 },
      { name: 'Camera Operation', level: 85 },
      { name: 'Lighting Design', level: 80 },
    ],
  },
  {
    name: 'Creative Software',
    icon: 'palette',
    skills: [
      { name: 'TouchDesigner', level: 90 },
      { name: 'Unreal Engine', level: 78 },
      { name: 'Cinema 4D', level: 75 },
      { name: 'ZBrush', level: 70 },
      { name: 'Blender', level: 75 },
      { name: 'Adobe Creative Suite', level: 85 },
      { name: 'DaVinci Resolve', level: 82 },
      { name: 'Ableton Live', level: 88 },
    ],
  },
  {
    name: 'Development',
    icon: 'code',
    skills: [
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Node.js', level: 78 },
      { name: 'HTML / CSS', level: 90 },
      { name: 'REST APIs', level: 80 },
    ],
  },
  {
    name: 'Production Tools',
    icon: 'settings',
    skills: [
      { name: 'Video Systems Integration', level: 92 },
      { name: 'Streaming Platforms', level: 85 },
      { name: 'Audio Mixing', level: 90 },
      { name: 'Color Grading', level: 78 },
      { name: 'Motion Graphics', level: 80 },
    ],
  },
]
