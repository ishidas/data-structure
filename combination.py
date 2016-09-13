class Solution(object):
  def combination(self, nums):
    res=[]
    self.helper(nums,res,[],0)
    return res
  def helper(self, nums, res, sub, index):
    res.append(sub)
    for i in range(index,len(nums)):
      print("index : "),
      print(index)
      print("i + 1 : "),
      print(i + 1)

      self.helper(nums,res,sub + [nums[i]], i + 1)


  def merge(self, nums1, nums2):
    res = []
    i = 0
    j = 0
    while i < len(nums1) or j < len(nums2):
      if i >= len(nums1):
        res.append(nums2[j])
        j += 1
      elif j >= len(nums2):
        res.append(nums1[i])
        i += 1
      elif nums1[i] > nums2[j]:
        res.append(nums2[j])
        j += 1
      else:
        res.append(nums1[i])
        i += 1
    return res

nums1=[1,4,9]
nums2 = [2,5,7]
# print(Solution().combination(nums))
print(Solution().merge(nums1,nums2))
